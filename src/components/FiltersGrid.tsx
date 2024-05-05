import { Badge, Typography } from "@mui/material";
import MultipleSelectChip from "./Fliter";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { JobListResponse } from "./JobsGrid";

function FilterGrid() {
  const storedJobs = useSelector((state: RootState) => state.jobs);
  const [jobs] = useState<JobListResponse>(storedJobs);

  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: 2,
          padding: 2,
        }}
        component={"div"}
      >
        <Badge badgeContent={jobs.totalCount} color="primary" max={9000}>
          <Typography
            sx={{
              textDecoration: "1px solid underline",
              textUnderlineOffset: 10,
              textDecorationColor: "#3522e2",
              cursor: "pointer",
            }}
            component={"div"}
          >
            Search Jobs
          </Typography>
        </Badge>
      </Typography>

      <div className="filtergriditems">
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
        <MultipleSelectChip />
      </div>
    </div>
  );
}

export default FilterGrid;
