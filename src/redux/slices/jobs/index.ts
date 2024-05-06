import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRoles: [] as { label: string; value: string }[],
  selectedMinExp: { label: "", value: 0 } as {
    label: string;
    value: number;
  },
  selectedMinSalary: { label: "", value: 0 } as {
    label: string;
    value: number;
  },
  selectedLocationType: [] as { label: string; value: string }[],
  searchedTerm: "",
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.selectedRoles = action.payload;
    },
    setMinExp: (state, action) => {
      state.selectedMinExp = action.payload;
    },
    setMinSalary: (state, action) => {
      state.selectedMinSalary = action.payload;
    },
    setLocationType: (state, action) => {
      state.selectedLocationType = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchedTerm = action.payload;
    },
  },
});

export const {
  setRoles,
  setMinExp,
  setMinSalary,
  setLocationType,
  setSearchTerm,
} = filterSlice.actions;
export default filterSlice.reducer;
