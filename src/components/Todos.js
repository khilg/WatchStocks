import React,{useState} from 'react'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

export const Todos = () =>{
    const [todos,setTodos] = useState('')
    const [todoList,setTodoList]=useState([])
    const handleSubmit = e =>{
        e.preventDefault();
        const newList = {
            todo : todos,
            status : false,
            id :Date.now()
            }
        setTodos('')     
        setTodoList(todoList.concat(newList))
        
    }
    const deleteTodo = todoId  =>{
        const newlist = todoList.filter(todolist => todolist.id !== todoId)
        setTodoList(newlist)
    }
    const completedTodo = todoId =>{
        const newlist = todoList.filter(todolist => todolist.id !== todoId)
        const newlistDone = todoList.filter(todolist => todolist.id === todoId)[0]
        newlistDone.status = true;
        setTodoList(newlist.concat(newlistDone))
    }



return(
    <div className="todo-todo-container">
        <div className='todo-container'>
            <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Enter Todos" value={todos} onChange={e => setTodos(e.target.value)} required/>
            <button type="submit">Add</button>
            </form>
            <div>
                <ol>
                {todoList.map(values => (
                  <li className={values.status===true ?"list done-color" : "list"} key={values.id}>{values.todo}<span><CloseOutlinedIcon onClick={()=>deleteTodo(values.id)} /> {!values.status ? <CheckOutlinedIcon onClick={()=>completedTodo(values.id)} /> : null}</span></li>
                ))}
              </ol>
            </div>
        </div>

    </div>
   
)

}