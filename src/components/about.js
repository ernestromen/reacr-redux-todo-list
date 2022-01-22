import React from 'react';
import {useSelector} from 'react-redux';
import '@fortawesome/fontawesome-free/js/all.js';
import { useState,useEffect,useRef } from 'react';
const { v4: uuidv4 } = require('uuid');


const About=(prop)=> {
///======Shows status of the task ===========
const [status,setStatus] = useState([
'Completed',
'In progress',

]);

const [formInput,setFormInput] = useState([]);

const [tasks,setTasks] = useState([
//   {
//     id:0,
//     taskName:'eat a bunch of bananas1',
// taskStatus:{
//   completed:true,
//   inProgress:false
// }
// },
// {
//   id:1,
//   taskName:'eat a bunch of bananas2',
// taskStatus:{
//   completed:true,
//   inProgress:false
// }
// },


]);


const [input,setInputs]= useState([]);

const handleTaskForm = (e) =>{
  e.preventDefault();
  

}




const handleInput = (e) =>{
e.preventDefault();




let ob = {
id:uuidv4(),
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
  const target = e.target.id.split('id')[1];
  //One of the state objects

let mapped = tasks.map(el=>{
;
return el.id=== (target) ? {...el,taskStatus:{completed:!el.taskStatus.completed,inProgress:!el.taskStatus.progress}}: {...el};
  
  });

    setTasks(mapped);




}



useEffect(() => {

});


const list = tasks.map((e,i)=>{
  return <tr  key={i}>
      <th   scope="row">{tasks[i].taskName}</th>
    <td id={`id${tasks[i].id}`} onClick={changeStatus} >{tasks[i].taskStatus.completed ? 'completed' : 'inProgress'}</td>
    <td><i className="fas fa-edit"></i></td>
      <td><i className="fas fa-trash"></i></td>
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
</div>




    </div>
    )
}

export default About
