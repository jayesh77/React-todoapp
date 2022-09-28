
import { useState } from 'react';
import './App.css';

function App() {

  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])
  const [editId,setEditId]=useState(0)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(editId){
      const editTodo=todos.find((i)=>i.id===editId)
      console.log(editTodo)
      console.log(todos)
      const updatedTodos=todos.map((t) =>
      t.id === editTodo.id ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo }
        
    );
    setTodos(updatedTodos);
    setEditId(0);
    setTodo("");
    return ;
    }
    if(todo!==''){
      setTodos([{id:`${todo}-${Date.now()}`,todo:todo} , ...todos])
      setTodo('')
    }
  }
  const handleDelete=(id)=>{
   
    const delTodo=todos.filter((item)=>item.id!==id)

    setTodos([...delTodo])
  }
  const handleEdit=(id)=>{
    const updateitem=todos.find((item)=>item.id===id)
    setTodo(updateitem.todo)
    console.log(id)
    setEditId(id)
  }
  return (
    <div className="App">
    <div className='container'>  
    <h1>TO do list</h1> 
    <form className='todoform' onSubmit={handleSubmit}>
      <input type='text' value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
      <button type='submit'>{editId ? "Edit": "Go"}</button>
    </form>
    <ul className='allTodos'>
      {todos.map((item)=>
      <li className='singleTodo' key={item.id}><span className='todoText'>{item.todo}</span>
      <button onClick={()=>handleEdit(item.id)}>Edit</button>
      <button onClick={()=>handleDelete(item.id)}>Delete</button></li>)}
  </ul>
     
    </div>

    </div>
    
  );
}

export default App;
