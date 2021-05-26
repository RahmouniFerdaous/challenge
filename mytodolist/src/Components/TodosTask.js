import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';


const TodosTask = ({task,toggleTodo,deleteTask }) => {
   
    // const  [newtask, setnewtask] = useState( 
    //     {id: uuidv4(),
    //     description:'',
    //     done:0} )
    return (
        <div>
            <p style={{textDecoration: task.done?  'line-through' :'none' }}>{task.description}</p>
           <button onClick={()=>deleteTask(task.id)}>Delete</button>
           <button onClick={()=>toggleTodo(task.id)}>Done/Undone</button>
        </div>
    )
}
export default TodosTask
