import React from 'react';
import '../stylecomponents/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/js/all.js';
import { useState,useEffect } from 'react';
import EditForm from './editForm';
const { v4: uuidv4 } = require('uuid');


const Home=(prop)=> {
///======Shows status of the task ===========


const [formInput,setFormInput] = useState([]);
const [showForm,setShowForm] = useState(false);
const [formId, setFormId] = useState(false);
const [tasks,setTasks] = useState([]);
const [formError,setFormError] =useState(false);

const [input,setInputs]= useState([]);

const editTask = (e)=>{
  e.preventDefault();

  const target = e.target.parentNode.parentNode.parentNode.id;
setFormId(target);
setShowForm(true);

}



const deleteTask = (e) =>{
  e.preventDefault();
const target = e.target.parentNode.parentNode.parentNode.id;
let mapped = tasks.filter(e=>{
if(e.id !==parseInt(target) ){
 return true;
}else{
  return false;
}
});



  setTasks(mapped);


}




const handleInput = (e) =>{
e.preventDefault();




let newId =tasks.length+1;
if(!(formInput.length===0)){
  setFormError(false);

  // formInput = formInput.replace(/\s/g, "")
  let ob = {
    id:newId,
    taskName:formInput,
    taskStatus:{
      completed:false,
      inProgress:true
    }
    
    }
    
    
    setTasks(prev=>[...prev,...[ob]]);
}else{
  setFormError(true);

}

}

const changeStatus = (e) =>{
  //id from node
  const target = e.target.parentNode.id;
  //One of the state objects

let mapped = tasks.map(el=>{
return el.id=== parseInt(target) ? {...el,taskStatus:{completed:!el.taskStatus.completed,inProgress:!el.taskStatus.progress}}: {...el};
  
  });

    setTasks(mapped);




}



useEffect(() => {

});


const list = tasks.map((e,i)=>{
 let id=i;
  return <tr id={id+1}  key={uuidv4()} >
      <th   scope="row">{tasks[i].taskName}</th>
    <td  onClick={changeStatus} >{tasks[i].taskStatus.completed ? 'completed' : 'inProgress'}</td>
    <td onClick={editTask}><i  className="fas fa-edit"></i></td>
      <td onClick={deleteTask}><i className="fas fa-trash"></i></td>
       </tr>
  
  
    });




    return (
        <div>
        <div className="container ">
            <div className="row">
                <div className="col-12">
        <form onSubmit={handleInput} className="mb-5 mt-5 d-flex justify-content-center">
        <input onChange={e=>setFormInput(e.target.value)} type="text" placeholder="Enter task" className="w-auto form-control"/>
        <button  type="submit" className="btn btn-warning rounded-0">SUBMIT</button>

</form>
{formError? <div style={{color:"red"}}>incorrect input!</div>:''}
</div>
</div>
   
   
  {tasks.length > 0 ?      <table className="table border border-dark">
  <thead className="thead-dark"> <tr>
      <th scope="col">task</th>
      <th scope="col">status</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>  </thead>
  
  <tbody>
  {
   list 
  }
  
  
  </tbody>
  
  
  </table>:<h1 style={{textAlign:"center"}}>Please add your tasks!</h1> }

{showForm ? <EditForm formId={formId} showForm={showForm} setShowForm={setShowForm} setTasks={setTasks} tasks={tasks}/>:''}
</div>




    </div>
    )
}

export default Home
