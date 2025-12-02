import React, { useState, useEffect } from "react";

const GitBtn = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const startShaking = () => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    };
    const intervalId = setInterval(startShaking, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.open('https://github.com/cvensingh')}
      className={`github-btn ${isShaking ? "shake" : ""}`}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "56px",
        zIndex: 1000,
        padding: "10px 16px",
        borderRadius: "10px",
        background: isShaking ? "#FFD600" : "#fff",
        color: "#222",
        border: "1px solid #eee",
        boxShadow: isShaking ? "0 0 10px #FFD600" : "0 2px 8px #ccc",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      <img src="/images/github.png" alt="github" style={{ width: 28, background: "transparent" }} />
      GitHub
    </button>
  );
};

export default GitBtn;
