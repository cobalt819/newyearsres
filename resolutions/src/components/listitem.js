import {Col, Form, Row} from "react-bootstrap"
import './listitem.css'
import React, { useState } from 'react'

function ListItem(props) {
    const [isComplete, setIsComplete] = useState(false)
    let styles = {}
    if (isComplete) {
        styles = {backgroundColor: "#786fa6"}
    }
  
    return (
    <div className = "list-item" style = {styles}>
        <Row>
            <Col xs = {1}><Form.Check type = "checkbox" value= {isComplete} onChange = {()=> {setIsComplete(!isComplete)}} /></Col>
            <Col xs = {11}>{props.item}</Col>
        </Row>
    </div>
  );
}

export default ListItem;
