import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useAppDispatch } from "../redux/hooks";
import {
  setLocationType,
  setMinExp,
  setMinSalary,
  setRoles,
} from "../redux/slices/jobs";

function Fliter({
  title,
  optionsArray,
  isMultiSelect = false,
}: {
  title: "Roles" | "Experience" | "Location" | "Minimum Base Pay Salary";
  optionsArray: { label: string; value: string | number }[];
  isMultiSelect?: boolean;
}) {
  const dispatch = useAppDispatch();

  const dispatchHelper = (
    title: "Roles" | "Experience" | "Location" | "Minimum Base Pay Salary",
    newValue: any,
    dispatch: AppDispatch
  ) => {
    if (title == "Roles") dispatch(setRoles(newValue));
    if (title == "Experience") dispatch(setMinExp(newValue));
    if (title == "Minimum Base Pay Salary") dispatch(setMinSalary(newValue));
    if (title == "Location") dispatch(setLocationType(newValue));
  };

  const getValue = (
    title: "Roles" | "Experience" | "Location" | "Minimum Base Pay Salary"
  ) => {
    if (title == "Roles")
      return useSelector((state: RootState) => state.filters.selectedRoles);
    if (title == "Experience")
      return useSelector((state: RootState) => state.filters.selectedMinExp);
    if (title == "Minimum Base Pay Salary")
      return useSelector((state: RootState) => state.filters.selectedMinSalary);
    if (title == "Location")
      return useSelector(
        (state: RootState) => state.filters.selectedLocationType
      );
  };

  return (
    <Autocomplete
      multiple={isMultiSelect}
      size="small"
      limitTags={5}
      value={getValue(title)}
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
