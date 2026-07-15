```bash
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if(!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  }

  const deleteTodo = (index) => {
    setTodos(
      todos.filter((_, i) => i !== index)
    );
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Add your task" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown = {(e) => {
            if(e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <div>
          <button onClick = {addTodo}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

```
