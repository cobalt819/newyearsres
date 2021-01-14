import './list.css'
import ListItem from "./listitem"
import React, {useState} from 'react'

function List() {
    const [goals, setGoals] = useState({})
  return (
    <div className = "list-container">
        <h2 classname = "list-header">2021 Goals</h2>
        <input placeholder = "type a new goal here..." className = "list-input"></input>
        <ListItem item ="Learn more code"></ListItem>
        <ListItem item = "go to hackathons"></ListItem>
        <ListItem item= "run a 6K"></ListItem>
    </div>
  )
}

export default List;
