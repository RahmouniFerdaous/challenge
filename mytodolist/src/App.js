import './App.css';
import TodosList from './Components/TodosList';
import Form from './Components/Form';
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [tasks,setTasks]= useState([
    {id: uuidv4(),
    description:'challegne',
    done:true}
]);
  const [show,setshow]=useState(true);
  const HandleShow = ()=>{
      setshow(!show)
  }
  const addnewtask = (newobj)=>{
    setTasks([...tasks,newobj])
  }
  const toggleTodo=(id)=>{
    setTasks(tasks.map(elm=>elm.id===id? {...elm,done:!elm.done}:elm))
  }
  const deleteTask = (id)=>{
    const newList= tasks.filter(elm=>elm.id!==id) 
    setTasks(newList)
  }

  return (
    <div className="App">

<Form addnewtask={addnewtask}/>
      <button onClick={HandleShow}>Add new Task</button>
      {show &&  <TodosList deleteTask={deleteTask } toggleTodo={toggleTodo} tasks={tasks} />}
    </div>
  );
}

export default App;
