import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobListResponse } from "../../../components/JobsGrid";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: { jdList: [], totalCount: 0 } as JobListResponse,
  reducers: {
    resetJobs: (state) => {
      state.jdList = [];
      state.totalCount = 0;
    },

    setNewJobs: (_state, action: PayloadAction<JobListResponse>) => {
      return action.payload;
    },
  },
});

export const { resetJobs, setNewJobs } = jobSlice.actions;
export default jobSlice.reducer;
