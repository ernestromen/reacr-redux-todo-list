import React from 'react';
import {useSelector} from 'react-redux';
import '@fortawesome/fontawesome-free/js/all.js';
import { useState,useEffect,useRef } from 'react';


const About=(prop)=> {
///======Shows status of the task ===========
const [status,setStatus] = useState([
'Completed',
'In progress',

]);

const [tasks,setTasks] = useState([
  {
    id:0,
    taskName:'eat a bunch of bananas1',
taskStatus:{
  completed:'true',
  inProgress:'false'
}
},
{
  id:1,
  taskName:'eat a bunch of bananas2',
taskStatus:{
  completed:'true',
  inProgress:'false'
}
},


]);


const [input,setInputs]= useState([]);

const handleTaskForm = (e) =>{
  e.preventDefault();
  

}




const handleInput = (e) =>{
setInputs([e.target.value])
  
}

const changeStatus = (e) =>{
  //id from node
  const target = e.target.id.split('id')[1];
  //One of the state objects
const targetTask = tasks[target];
console.log(tasks,'lets see');
let mapped = tasks.map(el=>{
 return el.id=== target ? {...el,taskStatus:'in progress'}: {...el};
  
  });
console.log(mapped,'mapped');
    // setTasks(prevState=> [...prevState,mapped]);
/** */
setTasks(prevState=>{
  
 return [...prevState,{id:1,taskStatus:'in progress'}]

});
console.log(tasks,'after everything');



}



useEffect(() => {

});


const list = tasks.map((e,i)=>{
  return <tr  key={i}>
      <th   scope="row">{tasks[i].taskName}</th>
    <td id={`id${i}`} onClick={changeStatus} >{tasks[i].taskStatus.completed ? 'completed' : 'inProgress'}</td>
    <td><i className="fas fa-edit"></i></td>
      <td><i className="fas fa-trash"></i></td>
       </tr>
  
  
    });



///===========Global state from redux!! ===============
    let counter = useSelector(state=>state.counter);

    return (
        <div>
          {/* <div>{console.log(tasks,'tasks here')}</div> */}
        <div>this is the about page:{counter}</div>
        <div className="container ">
            <div className="row">
                <div className="col-12">
        <form className="mb-5 d-flex justify-content-center">
        <input onChange={handleInput} type="text" placeholder="Enter task" className="w-auto form-control"/>
        <button type="submit" onClick={handleTaskForm} className="btn btn-warning rounded-0">SUBMIT</button>

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
