function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "8px" }}>
        {props.name}
      </h2>
      <p style={{ fontSize: "18px" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
