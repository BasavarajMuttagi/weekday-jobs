import { useQuery } from "@tanstack/react-query";
import JobCard from "./JobCard";
import axios from "axios";
import Loading from "./Loading";
import { Typography } from "@mui/material";

function JobsGrid() {
  const getAllJobs = async () => {
    const body = {
      limit: 10,
      offset: 0,
    };
    const result = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result.data as JobListResponse;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getalljobs"],
    queryFn: async () => getAllJobs(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="jobGrid">
      {data?.jdList.map((eachJob) => (
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

type JobListResponse = {
  jdList: Job[];
  totalCount: number;
};
