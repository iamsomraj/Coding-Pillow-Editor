import React from "react";
import { Alert } from "react-bootstrap";

const Message: React.FC = ({ children }) => {
  return (
    <Alert data-testid="message" variant="primary">
      {children}
    </Alert>
  );
};

export default Message;
