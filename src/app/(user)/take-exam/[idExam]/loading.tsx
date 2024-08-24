import React from "react";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-loading">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
