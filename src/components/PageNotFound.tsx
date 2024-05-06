function PageNotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "35px",
        color: "white",
        columnGap: 20,
        fontWeight:"bold"
      }}
    >
      <span>Page Not Found</span>
    </div>
  );
}

export default PageNotFound;
