import axios from "axios";
import { useEffect, useState } from "react"
import { TodoForm } from "../modules/todo/todo.form";
import { EditTodoForm } from "../modules/todo/edit-todo.form";
import { Nav } from "../components/common/nav";
import { LoginForm } from "../components/common/login";
import { SignUpForm } from "../components/common/signup";

export const TodoScreen = ()=>{
    const [tasks,setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState({
        _id: '',
        title: '',
        status:''
    });

    useEffect(()=>{
        (async ()=>{
            await loadTasks();
        })();
    },[])

    const createTask = async(task)=>{
       try{
        const res = await axios.post("http://localhost:8081/todo",task);
        await loadTasks();
       }catch(e){
        console.log(e);
       }
    }
    const deleteTask = async (_id)=>{
        try{
            const res = await axios.delete("http://localhost:8081/todo/"+_id);
            await loadTasks();
           }catch(e){
            console.log(e);
           }
    }
    const updateTask = async (_id)=>{
        try{
            const res = await axios.put("http://localhost:8081/todo/"+selectedTask._id, selectedTask);
            await loadTasks();
            resetEditForm();
           }catch(e){
            console.log(e);
           }
    }

    const resetEditForm=()=>{
        setSelectedTask({
            _id:'',
            title:'',
            status:''
        })
    }
    const loadTasks = async ()=>{
        const res = await axios.get('http://localhost:8081/todo');
        setTasks(res.data.data)
    }

    const loadSelectedTask =async (id)=>{
        const res = await axios.get("http://localhost:8081/todo/"+id);
        setSelectedTask(res.data.data);
    } 
    const register = async()=>{
        const res= await axios.post('http://localhost:8081/user/',register);

    }
    const login = async()=>{
        const res= await axios.post('http://localhost:8081/user/',login);

    }
    const signUpHandler=()=>{
        setLoginIsVisible(false);
        setSignUpIsVisible(true);
    }
    const [loginIsVisible,setLoginIsVisible]=useState(false);
    const [signUpIsVisible,setSignUpIsVisible]=useState(false);

    

return(
<>
<Nav open={()=>setLoginIsVisible(true)}/>
<section>
    <h1>TodoScreen</h1>
    <TodoForm submit={createTask}/>
    {/* <div>
        {tasks.map((v,key)=><h6 key={key}>{v._id}.{v.title}</h6>)}
    </div> */}
    <div className={"tasks-list"}>
            <h2>Tasks List</h2>
        <div className="tasks">
            {tasks.map((v, key) => (
                <div className={"card"} key={key}>
                    <div>{v.title}</div>
                    <p>{v.status}</p>
                    <button onClick={()=>loadSelectedTask(v._id)}>Edit Task</button>
                    <button onClick={()=>deleteTask(v._id)}>Delete Task</button>
                    
                </div>
            ))}
        </div>
    </div> 
    <EditTodoForm selectedTask={selectedTask} setSelectedTask={setSelectedTask} submitForm={updateTask}/>
</section>
<LoginForm open={loginIsVisible} close={()=>setLoginIsVisible(false)} linkclick={()=>signUpHandler()} submit={login}/>
<SignUpForm open={signUpIsVisible} close={()=>setSignUpIsVisible(false)} submit={register}/>
</>
)
}