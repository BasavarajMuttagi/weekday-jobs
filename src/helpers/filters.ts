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
