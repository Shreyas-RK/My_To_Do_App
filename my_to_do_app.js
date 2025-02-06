import React,{useState} from "react";


function ToDolist(){
  const [input,setInput]=useState('');
  const [tasks,setTask]=useState([]);

  const addTask =() =>{
    if(input.trim()!=="")
      setTask([...tasks, input])
    setInput("");
  };

  const deleteTask =(index) =>{
    const UpdatedTask=tasks.filter((_,i)=>i!==index);
    setTask(UpdatedTask)
  };

  return(
    <div>
        <h1>
        TO DO APPLICATION
        </h1>
        <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="add daily task"
      />
      <button onClick={addTask}>ADD</button>
      <ul>
        {
          tasks.map((task,index)=>(
            <li key={index}>
              {task}
              <button onClick={()=>deleteTask(index)}>DELETE</button>

            </li>
          ))
        }
      </ul>
    </div>
  )

}

export default ToDolist
