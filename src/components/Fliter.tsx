import { Autocomplete, TextField } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { dispatchHelper, getValue } from "../helpers/filters";
import { titles } from "../helpers/types";

function Fliter({
  title,
  optionsArray,
  isMultiSelect = false,
  isFreeSolo = false,
}: {
  title: titles;
  optionsArray: { label: string; value: string | number }[];
  isMultiSelect?: boolean;
  isFreeSolo?: boolean;
}) {
  const dispatch = useAppDispatch();

  if (isFreeSolo) {
    return (
      <Autocomplete
        freeSolo
        size="small"
        limitTags={5}
        value={getValue("Search") as ""}
        onChange={(_, newValue) => {
          dispatchHelper(title, newValue, dispatch);
        }}
        options={optionsArray as []}
        defaultValue={""}
        renderInput={(params) => (
          <TextField
            {...params}
            label={title}
            placeholder={title}
            variant="outlined"
            onChange={(e) => {
              dispatchHelper(title, e.target.value, dispatch);
            }}
          />
        )}
        className="auto-complete"
      />
    );
  }
  return (
    <Autocomplete
      multiple={isMultiSelect}
      size="small"
      limitTags={5}
      value={getValue(title) as []}
      onChange={(_, newValue) => {
        dispatchHelper(title, newValue, dispatch);
      }}
      options={optionsArray}
      getOptionLabel={(option) => option?.label || ""}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
          placeholder={title}
          variant="outlined"
        />
      )}
      className="auto-complete"
    />
  );
}

export default Fliter;
