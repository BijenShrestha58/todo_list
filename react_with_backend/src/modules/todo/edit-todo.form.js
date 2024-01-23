import { useState } from "react";

export const EditTodoForm  =(props)=>{
    const submitForm=async (e)=>{
        e.preventDefault();
        await props.submitForm(props.selectedTask)
    }

    const formHandler=(e)=>{
        props.setSelectedTask({
            ...props.selectedTask,
            [e.target.name]: e.target.value
        })
    }
    return <form onSubmit={submitForm}>
        <input value={props.selectedTask._id} name="_id" placeholder="Enter id" disabled required onChange={formHandler}/>
        <input value={props.selectedTask.title} name="title" placeholder="Enter title" required onChange={formHandler}/>
        <input value={props.selectedTask.status} name="status" placeholder="Enter status" required onChange={formHandler}/>
        <button type="submit" disabled={props.selectedTask.id ===''}>Submit</button>
    </form>
}