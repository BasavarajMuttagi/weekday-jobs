import { useRef } from "react";
import FilterGrid from "../components/FiltersGrid";
import JobsGrid from "../components/JobsGrid";
import SideBar from "../components/SideBar";

function HomePageLayout() {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="home">
      <SideBar />
      <div className="main-container" ref={contentRef}>
        <FilterGrid />
        <JobsGrid contentRef={contentRef} />
      </div>
    </div>
  );
}

export default HomePageLayout;
