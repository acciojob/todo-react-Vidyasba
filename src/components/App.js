
import React ,{useState} from "react";
import './../styles/App.css';


const App = () => {
  const[todo, setTodo]=useState('');
  const[todos ,setTodos] = useState([]);
  const handleAdd=e=>{
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo('');
    console.log(todos);
  }

  const handleDelete=(index)=>{
    setTodos(todos.filter((todo,i)=> i!==index));
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <form>
          <input type="text" id="todo" value={todo} 
          onChange={(e)=>setTodo(e.target.value)}name="todo"/>
          <button onClick={handelAdd}>Add Todo</button>
        </form>

        <ul>
         {todos.map((todo,index)=>{
          return(
            <li key={index}>
              <div className="todo-item">
                <p>{todo}</p>
                <button onClick={()=>{handleDelete}}>Delete</button>
              </div>
            </li>
          )
         })}
        </ul>
    </div>
  )
}

export default App
