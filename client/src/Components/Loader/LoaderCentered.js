import React from 'react';
import Loader from './Loader';

const LoaderCentered = () => {
  return (
    <div
      className="border-0 form-control p-4 text-center"
      style={{ opacity: 0.7 }}
    >
      <Loader />
    </div>
  );
};

export default LoaderCentered;
