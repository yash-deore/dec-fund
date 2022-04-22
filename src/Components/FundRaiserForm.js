import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const FundRaiserForm = () => {
  return (
    <Container>
      <h2>Fund Raiser Form</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Minimum Contribution :</Form.Label>
          <Form.Control required type="number" placeholder="in ETH" min="0" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title of your funding Campaign :</Form.Label>
          <Form.Control required type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Describe your funding Campaign :</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Display Image :</Form.Label>
          <Form.Control required type="file" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Target Amount :</Form.Label>
          <Form.Control required type="number" placeholder="in ETH" min="0" />
        </Form.Group>

        {/* <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Brochure for your fundraiser :</Form.Label>
          <Form.Control required type="file" />
        </Form.Group> */}

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default FundRaiserForm;
