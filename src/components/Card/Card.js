import React from "react";
import Card from "react-bootstrap/Card";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CardBootstrap(props) {
  return (
    <Card style={{ width: "18rem", margin: "6px" }}>
      <Card.Body>
        <Card.Title>
          {
            props.isEdit === true 
            ? <Form.Control type="email" placeholder="Enter Title" />
            : props.title !== undefined ? props.title : 'Empty Title'
          }
          
          <span style={{ marginLeft: "10px"}}>#{props.id}</span>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
         {
            props.isEdit === true 
            ? <Form.Control type="email" placeholder="Enter Subtitle" />
            : props.subtitle !== undefined ? props.subtitle :'Empty SubTitle'
          }
        </Card.Subtitle>
        <Card.Text>
          {
            props.isEdit === true 
            ?  <Form.Control type="email" placeholder="Enter Text" />
            : props.text !== undefined ? props.text :'Empty Text'
          }
         
        </Card.Text>
        {props.isEdit === true 
        ?<Button onClick={props.submitEdit} variant="primary" type="submit">Submit</Button> 
        :<Card.Link onClick={props.edit} style={{cursor:'pointer'}} >Edit</Card.Link>}
      </Card.Body>
    </Card>
  );
}
