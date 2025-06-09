import React from "react";

const ErrorBanner = ({ mess }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 relative ">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{mess}</span>
    </div>
  );
};

export default ErrorBanner;
