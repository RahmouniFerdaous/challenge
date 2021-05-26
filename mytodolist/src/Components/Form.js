import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({addnewtask}) => {
    const  [newtask, setnewtask] = useState( 
        {
        description:'',
        done:true} )
    return (
        <div>
            <input name="description" placeholder="Add new Task" onChange={(e)=>setnewtask({...newtask,description:e.target.value})}/>
            <button onClick={(e)=>addnewtask({...newtask,id:uuidv4()})} >Add</button>
        </div>
    )
}

export default Form
