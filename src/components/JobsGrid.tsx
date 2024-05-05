import JobCard from "./JobCard";
import axios from "axios";
import { RefObject, useContext, useEffect, useMemo, useState } from "react";
import JobCardSK from "./JobCardSK";
import { TotalRecordsContext } from "../Layouts/HomePageLayout";

function JobsGrid({ contentRef }: { contentRef: RefObject<HTMLDivElement> }) {
  const data = useContext(TotalRecordsContext);
  const setValue = data[1];
  const [isloading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [updatedJobs, setUpdatedJobs] = useState<Job[]>([]);

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
      setUpdatedJobs([...updatedJobs, ...data.jdList]);
      setValue(data.totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = contentRef.current?.clientHeight;
      const scrollPosition = contentRef.current?.scrollTop;
      const scrollPercentage =
        (scrollPosition! /
          (contentRef.current?.scrollHeight! - viewportHeight!)) *
        100;
      if (scrollPercentage > 90 && isloading == false) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
      }
    };
    if (contentRef && contentRef.current) {
      contentRef.current?.addEventListener("scroll", handleScroll);
    }

    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [updatedJobs, currentPage]);

  const memoizedJobs = useMemo(() => updatedJobs, [updatedJobs]);

  return (
    <div className="jobGrid">
      {memoizedJobs.map((eachJob) => (
        <JobCard job={eachJob} key={eachJob.jdUid} />
      ))}

      {isloading && (
        <>
          <JobCardSK />
          <JobCardSK />
          <JobCardSK />
          <JobCardSK />
          <JobCardSK />
        </>
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
