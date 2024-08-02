import React from "react";

interface ILoading {
  isLoading: boolean;
}

const Loading: React.FC<ILoading> = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-loading">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
};

export default Loading;
