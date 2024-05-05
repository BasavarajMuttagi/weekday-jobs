import FilterGrid from "../components/FiltersGrid";
import JobsGrid from "../components/JobsGrid";
import SideBar from "../components/SideBar";

function HomePageLayout() {
  return (
    <div className="home">
      <SideBar />
      <div className="main-container">
        <FilterGrid />
        <JobsGrid />
      </div>
    </div>
  );
}

export default HomePageLayout;
