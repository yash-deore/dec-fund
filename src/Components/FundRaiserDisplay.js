import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const FundRaiserDisplay = () => {
  return (
    <>
      <Card style={{ width: "24rem" }}>
        <Card.Img src="https://cutewallpaper.org/21/wolf-link-background/Image-result-for-link-zelda-background-Legend-of-zelda-.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Contribute</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FundRaiserDisplay;
