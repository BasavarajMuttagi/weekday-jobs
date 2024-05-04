import { LoaderCircle } from "lucide-react";
function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "violet",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "35px",
        color: "white",
        columnGap: 20,
      }}
    >
      <span>Loading</span>
      <LoaderCircle size={50} className="spinner" />
    </div>
  );
}

export default Loading;
