import { Autocomplete, TextField } from "@mui/material";

const optionArray = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function Fliter() {
  return (
    <Autocomplete
      multiple
      size="small"
      limitTags={5}
      id="multiple-limit-tags"
      options={optionArray}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="limitTags"
          placeholder="Favorites"
          variant="outlined"
        />
      )}
      className="auto-complete"
    />
  );
}

export default Fliter;
