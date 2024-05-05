import JobCard from "./JobCard";
import axios from "axios";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setNewJobs } from "../redux/slices/jobs";

function JobsGrid() {
  const itemsPerPage = 10;
  const [currentPage] = useState(1);
  const dispatch = useDispatch();

  const storedJobs = useSelector((state: RootState) => state.jobs);

  const [jobs] = useState<JobListResponse>(storedJobs);

  const getAllJobs = async (currrentPage: number) => {
    const offset = (currrentPage - 1) * itemsPerPage;
    const body = {
      limit: itemsPerPage,
      offset,
    };
    try {
      const result = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = result.data as JobListResponse;
      dispatch(setNewJobs(data));
    } catch (error) {}
  };

  useEffect(() => {
    getAllJobs(currentPage);
  }, [currentPage]);

  return (
    <div className="jobGrid">
      {jobs?.jdList.map((eachJob) => (
        <JobCard job={eachJob} key={eachJob.jdUid} />
      ))}
      <Typography
        className="end"
        fontSize={12}
        variant="subtitle1"
        color="GrayText"
      >
        You've reached the end!
      </Typography>
    </div>
  );
}

export default JobsGrid;

export type Job = {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
};

export type JobListResponse = {
  jdList: Job[];
  totalCount: number;
};
