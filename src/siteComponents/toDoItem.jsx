import React from 'react'

const ToDoItem = ({task}) => {
  return (
    <div>
        <p>{task.task}</p>
    </div>
  )
}

export default ToDoItem