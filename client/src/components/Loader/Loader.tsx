import React from "react";
import { Spinner } from "react-bootstrap";

const Loader: React.FC = () => {
  return (
    <Spinner
      data-testid="loader"
      animation="border"
      style={{
        margin: "auto",
        display: "block",
      }}
    />
  );
};

export default Loader;
