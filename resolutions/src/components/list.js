import './list.css'
import ListItem from "./listitem"
import React, {useState} from 'react'
import {Button, Row, Col} from 'react-bootstrap'

function List() {
    
    const [goals, setGoals] = useState([
    "Run a 6K",
    "Go to Hackathons",
    "Learn to use React and Javascript"
]);

const [newGoal, setNewGoal] = useState("")

const listItems = goals.map((goal) => 
    <ListItem key = {goal} item = {goal} />);

    function addToGoals(goal) {
        const current_goals = [...goals]
        current_goals.push(goal)
        setGoals(current_goals)
}

  return (
    <div className = "list-container">
        <h2 className = "list-header">2021 Goals</h2>
        <Row>
            <Col xs = {12} md = {9}>
                <input className = "list-input" placeholder = "Type a new goal here..." value = {newGoal} onChange = {e => setNewGoal(e.target.value)} />
            </Col>
            <Col xs = {12} md = {3}>
                <Button className = "submit-button" size = "lg" block onClick = {()=> {addToGoals(newGoal); setNewGoal("")}}>Add Goal</Button>
            </Col>
        </Row>
        {listItems}
    </div>
  )
}

export default List;
