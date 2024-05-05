import { Typography } from "@mui/material";
import MultipleSelectChip from "./Fliter";

function FilterGrid() {
  return (
    <div>
      <Typography sx={{ textAlign: "center" ,marginBottom:2}}>Search Jobs</Typography>
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
