import React from 'react';
import {useSelector} from 'react-redux';
import '@fortawesome/fontawesome-free/js/all.js';
import { useState,useEffect,useRef } from 'react';
import EditForm from './editForm';
const { v4: uuidv4 } = require('uuid');


const About=(prop)=> {
///======Shows status of the task ===========


const [formInput,setFormInput] = useState([]);
const [showForm,setShowForm] = useState(false);
const [tasks,setTasks] = useState([
  {
    id:1,
    taskName:'task1',
    taskStatus:{
      completed:false,
      inProgress:true
    }
  },
    {
      id:2,
      taskName:'task2',
      taskStatus:{
        completed:false,
        inProgress:true
      }
    },
      {
        id:3,
        taskName:'task3',
        taskStatus:{
          completed:false,
          inProgress:true
        }
      }

]);


const [input,setInputs]= useState([]);

const editTask = (e)=>{
  e.preventDefault();

  const target = e.target.parentNode.parentNode.parentNode.id;
console.log(target,'target');

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

let ob = {
id:newId,
taskName:formInput,
taskStatus:{
  completed:false,
  inProgress:true
}

}


setTasks(prev=>[...prev,...[ob]]);
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



///===========Global state from redux!! ===============
    let counter = useSelector(state=>state.counter);

    return (
        <div>
        <div>this is the about page:{counter}</div>
        <div className="container ">
            <div className="row">
                <div className="col-12">
        <form onSubmit={handleInput} className="mb-5 d-flex justify-content-center">
        <input onChange={e=>setFormInput(e.target.value)} type="text" placeholder="Enter task" className="w-auto form-control"/>
        <button  type="submit" className="btn btn-warning rounded-0">SUBMIT</button>

</form>

</div>
</div>
        <table className="table border border-dark">
  <thead className="thead-dark">
    <tr>
      <th scope="col">task</th>
      <th scope="col">status</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  
<tbody>
{
 list 
}


</tbody>


</table>
{showForm ? <EditForm/>:''}
{console.log(                                                                                                                                                                       )}
</div>




    </div>
    )
}

export default About
