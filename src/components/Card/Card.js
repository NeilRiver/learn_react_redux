import React from "react";
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CardBootstrap(props) {
  return (
    <Card style={{ width: "18rem", margin: "6px" }}>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>
          {props.isEdit === true ? (
            <Form.Control
              type="text"
              onChange={(e) =>
                props.editText(
                  props.id,
                  e.target.value,
                  props.newEditedValues[1],
                  props.newEditedValues[2]
                )
              }
              value={props.newEditedValues[0]}
              placeholder="Enter Title"
            />
          ) : //? <Form.Control type="email"  onChange={ (e)=>props.editText(props.id, e.target.value)}  value={props.title !== undefined ? props.title : ''} placeholder="Enter Title" />
          props.title !== undefined ? (
            props.title
          ) : (
            "Empty Title"
          )}

          <span style={{ marginLeft: "10px" }}>#{props.id}</span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.isEdit === true ? (
            <Form.Control
              type="text"
              onChange={(e) =>
                props.editText(
                  props.id,
                  props.newEditedValues[0],
                  e.target.value,
                  props.newEditedValues[2]
                )
              }
              value={props.newEditedValues[1]}
              placeholder="Enter Subtitle"
            />
          ) : props.subtitle !== undefined ? (
            props.subtitle
          ) : (
            "Empty SubTitle"
          )}
        </Card.Subtitle>
        <Card.Text style={{ flex: "auto" }}>
          {props.isEdit === true ? (
            <Form.Control
              type="text "
              onChange={(e) =>
                props.editText(
                  props.id,
                  props.newEditedValues[0],
                  props.newEditedValues[1],
                  e.target.value
                )
              }
              value={props.newEditedValues[2]}
              placeholder="Enter Text"
            />
          ) : props.text !== undefined ? (
            props.text
          ) : (
            "Empty Text"
          )}
        </Card.Text>
        {props.isEdit === true ? (
          <Button onClick={props.submitEdit} variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Card.Link onClick={props.edit} style={{ cursor: "pointer" }}>
            Edit
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}
