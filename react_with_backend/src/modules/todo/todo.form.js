import { useState } from "react";

export const TodoForm  =(props)=>{
    const [task,setTask] = useState({ title: '', status:''});
    const submitForm=async (e)=>{
        e.preventDefault();
        await props.submit(task)
    }

    const formHandler=(e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    return <form onSubmit={submitForm}>
        <input name="title" placeholder="Enter title" required onChange={formHandler}/>
        <input name="status" placeholder="Enter status" required onChange={formHandler}/>
        <button type="submit">Submit</button>
    </form>
}