import {
  setRoles,
  setMinExp,
  setMinSalary,
  setLocationType,
  setSearchTerm,
} from "../redux/slices/jobs";
import { AppDispatch, RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import { titles } from "./types";
const Roles = [
  "Backend",
  "Frontend",
  "Fullstack",
  "IOS",
  "Flutter",
  "React Native",
  "Android",
  "Tech Lead",
  "Data Engineer",
  "Data Science",
  "NLP",
  "HR",
  "Legal",
  "Finance",
].map((role) => ({ label: role, value: role }));

const MIN_EXPERIENCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => ({
  label: `${year} year${year > 1 ? "s" : ""}`,
  value: year,
}));

const MIN_SALARY = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
].map((salary) => ({ label: `$${salary} k`, value: salary }));

const LOCATION_TYPE = ["Remote", "Hybrid", "In-Office"].map((location) => ({
  label: location,
  value: location,
}));

export { Roles, MIN_EXPERIENCE, MIN_SALARY, LOCATION_TYPE };

export const dispatchHelper = (
  title: titles,
  newValue: any,
  dispatch: AppDispatch
) => {
  switch (title) {
    case "Roles":
      dispatch(setRoles(newValue));
      break;
    case "Experience":
      dispatch(setMinExp(newValue));
      break;
    case "Minimum Base Pay Salary":
      dispatch(setMinSalary(newValue));
      break;
    case "Location":
      dispatch(setLocationType(newValue));
      break;
    case "Search":
      dispatch(setSearchTerm(newValue));
      break;
    default:
      break;
  }
};

export const getValue = (title: string) => {
  switch (title) {
    case "Roles":
      return useAppSelector((state: RootState) => state.filters.selectedRoles);
    case "Experience":
      return useAppSelector((state: RootState) => state.filters.selectedMinExp);
    case "Minimum Base Pay Salary":
      return useAppSelector(
        (state: RootState) => state.filters.selectedMinSalary
      );
    case "Location":
      return useAppSelector(
        (state: RootState) => state.filters.selectedLocationType
      );
    case "Search":
      return useAppSelector((state: RootState) => state.filters.searchedTerm);
    default:
      return "";
  }
};
