export type Job = {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
};

export type JobListResponse = {
  jdList: Job[];
  totalCount: number;
};

export type titles =
  | "Roles"
  | "Experience"
  | "Location"
  | "Minimum Base Pay Salary"
  | "Search";
