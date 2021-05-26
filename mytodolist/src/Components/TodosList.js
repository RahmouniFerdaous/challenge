import React, {useState}  from 'react';
import TodosTask from './TodosTask';


const TodosList = ({tasks,toggleTodo,deleteTask }) => {

    const handleDone = (id) =>{
        tasks.map((task)=>{   
            if(id===task.id){
              return {...task,done:!task.done}

        }
        else {
            return task
        }
    })
     
    }
    return (
        <div>
            {tasks.map(task=><TodosTask task={task} deleteTask={deleteTask } toggleTodo={toggleTodo}/> )}
        </div>
    )
}

export default TodosList;
