import React from "react";
import Card from "react-bootstrap/Card";

export default function CardBootstrap(props) {
  return (
    <Card style={{ width: "18rem", margin: "6px" }}>
      <Card.Body>
        <Card.Title>
          {props.title !== undefined ? props.title : "Empty Title"}
          <span style={{ marginLeft: "10px"}}>#{props.id}</span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle !== undefined ? props.subtitle : "Empty Subtitle"}
        </Card.Subtitle>
        <Card.Text>
          {props.text !== undefined ? props.text : "Empty Text"}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
      </Card.Body>
    </Card>
  );
}
