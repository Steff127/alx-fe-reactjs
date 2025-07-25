function MainContent() {
  return (
    <main
      style={{
        backgroundColor: "#e6f7ff",
        padding: "20px",
        fontFamily: "Arial",
        color: "#444",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Explore These Cities
      </h2>
      <ul
        style={{ listStyleType: "square", lineHeight: "1.8", fontSize: "18px" }}
      >
        <li>Tokyo</li>
        <li>Paris</li>
        <li>New York</li>
      </ul>
    </main>
  );
}

export default MainContent;
