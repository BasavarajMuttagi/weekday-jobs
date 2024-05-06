import JobCard from "./JobCard";
import axios from "axios";
import { RefObject, useContext, useEffect, useMemo, useState } from "react";
import JobCardSK from "./JobCardSK";
import { TotalRecordsContext } from "../Layouts/HomePageLayout";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { Box, Typography } from "@mui/material";
import { Job, JobListResponse } from "../helpers/types";

function JobsGrid({ contentRef }: { contentRef: RefObject<HTMLDivElement> }) {
  const {
    selectedRoles,
    selectedMinExp,
    selectedMinSalary,
    selectedLocationType,
    searchedTerm,
  } = useAppSelector((state: RootState) => state.filters);
  const data = useContext(TotalRecordsContext);
  const setValue = data[1];
  const [isloading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [updatedJobs, setUpdatedJobs] = useState<Job[]>([]);
  const [lastPage, setLastPage] = useState(-1);
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
      setLastPage(Math.ceil(data.totalCount / itemsPerPage));
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

      if (
        scrollPercentage > 90 &&
        isloading == false &&
        currentPage !== lastPage
      ) {
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

  const filteredJobs = useMemo(() => {
    return updatedJobs
      .filter((job) => {
        return Object.values(job).every((value) => value !== null);
      })
      .filter((job) => {
        // Filter by search term
        const searchTermFilter =
          !searchedTerm ||
          job.companyName.toLowerCase().includes(searchedTerm.toLowerCase());

        // Filter by role
        const roleFilter =
          selectedRoles.length === 0 ||
          selectedRoles.some(
            (role) => role.value.toLowerCase() === job.jobRole.toLowerCase()
          );

        // Filter by minimum experience
        const minExpFilter =
          !selectedMinExp ||
          job.minExp === null ||
          job.minExp >= selectedMinExp.value;

        // Filter by minimum salary
        const minSalaryFilter =
          !selectedMinSalary ||
          job.minJdSalary === null ||
          job.minJdSalary >= selectedMinSalary.value;

        // Filter by location type
        const locationTypeFilter =
          selectedLocationType.length === 0 ||
          selectedLocationType.some(
            (location) =>
              location.value.toLowerCase() === job.location.toLowerCase()
          );

        return (
          searchTermFilter &&
          roleFilter &&
          minExpFilter &&
          minSalaryFilter &&
          locationTypeFilter
        );
      });
  }, [
    updatedJobs,
    selectedRoles,
    selectedMinExp,
    selectedMinSalary,
    selectedLocationType,
    searchedTerm,
  ]);

  return (
    <>
      <div style={{ marginLeft: "20px" }}>results {filteredJobs.length}</div>
      <div className="jobGrid">
        {filteredJobs.map((eachJob) => (
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
        {currentPage == lastPage && (
          <Typography
            className="end"
            fontSize={20}
            variant="caption"
            color="black"
          >
            You Have Reached The End!
          </Typography>
        )}
      </div>
      {filteredJobs.length == 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography className="end" fontSize={20} variant="h5" color="black">
            No Jobs available for this category at the moment
          </Typography>
        </Box>
      )}
    </>
  );
}

export default JobsGrid;
