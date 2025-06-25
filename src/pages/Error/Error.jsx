import React from "react";
import "./Error.css";

const Error = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you are looking for doesn't exist.
        </p>
        <button className="home-button" onClick={handleGoHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
