import { createContext, useRef, useState } from "react";
import FilterGrid from "../components/FiltersGrid";
import JobsGrid from "../components/JobsGrid";
import SideBar from "../components/SideBar";
export const TotalRecordsContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);
function HomePageLayout() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [context, setContext] = useState(0);
  return (
    <div className="home">
      <SideBar />
      <div className="main-container" ref={contentRef}>
        <TotalRecordsContext.Provider value={[context, setContext]}>
          <FilterGrid />
          <JobsGrid contentRef={contentRef} />
        </TotalRecordsContext.Provider>
      </div>
    </div>
  );
}

export default HomePageLayout;
