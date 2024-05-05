import JobCard from "./JobCard";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import { RefObject, useEffect, useState } from "react";

function JobsGrid({ contentRef }: { contentRef: RefObject<HTMLDivElement> }) {
  const [isloading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [updatedJobs, setUpdatedJobs] = useState<Job[]>([]);
  const [, setJobsResponse] = useState<JobListResponse>();

  const getAllJobs = async (nextPage: number) => {
    setIsLoading(true);
    const offset = (nextPage - 1) * itemsPerPage;
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
      setJobsResponse(data);
      setUpdatedJobs([...updatedJobs, ...data.jdList]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs(currentPage);
    console.log(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = contentRef.current?.clientHeight;
      const scrollPosition = contentRef.current?.scrollTop;
      const scrollPercentage =
        (scrollPosition! /
          (contentRef.current?.scrollHeight! - viewportHeight!)) *
        100;
      if (scrollPercentage > 95) {
        const nextPage = currentPage + 1;
        console.log(currentPage, nextPage);
        setCurrentPage(nextPage);
      }
    };
    if (contentRef && contentRef.current) {
      contentRef.current?.addEventListener("scroll", handleScroll);
    }

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  return (
    <div className="jobGrid">
      {updatedJobs.map((eachJob) => (
        <JobCard job={eachJob} key={eachJob.jdUid} />
      ))}
      {isloading && (
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          component={"div"}
          className="end"
        >
          <CircularProgress />
        </Box>
      )}
      {/* <Typography
        className="end"
        fontSize={12}
        variant="subtitle1"
        color="GrayText"
      >
        You've reached the end!
      </Typography> */}
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
