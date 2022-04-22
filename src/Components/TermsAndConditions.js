import React, { useState } from "react";
import { Toast, ListGroup } from "react-bootstrap";

const TermsAndConditionsToast = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
      <span
        onClick={toggleShowA}
        className="mb-2"
        style={{ cursor: "pointer", color: "#0d6efd" }}
      >
        Terms and Conditions
      </span>

      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="me-auto">Terms and Conditions</strong>
        </Toast.Header>
        <Toast.Body>
          <ListGroup>
            <ListGroup.Item>
              1. Recipient's address cannot be changed
            </ListGroup.Item>
            <ListGroup.Item>2. Dec-Fund is not responsible</ListGroup.Item>
          </ListGroup>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default TermsAndConditionsToast;
