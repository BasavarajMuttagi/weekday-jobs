import { Badge, Typography } from "@mui/material";
import MultipleSelectChip from "./Fliter";
import { useContext } from "react";
import { TotalRecordsContext } from "../Layouts/HomePageLayout";

function FilterGrid() {
  const data = useContext(TotalRecordsContext);
  const value = data[0];

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
        <Badge badgeContent={value} color="primary" max={9000}>
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
