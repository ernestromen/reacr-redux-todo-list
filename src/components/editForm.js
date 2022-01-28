import React from 'react';
import {useState} from 'react';

import './editForm.css';




const EditForm = (prop) => {
  const [input, setInput] = useState("");


const cancelForm = ()=>{
prop.setShowForm(false);
}

  const handleForm = (e) =>{
    
    e.preventDefault();
let mapped = prop.tasks.map(e=>{

  if(e.id.toString() === prop.formId){
    return {...e,taskName:input};
  }else{
    return e;
  }
})
prop.setTasks(mapped);
  
  }

let condition =prop.tasks.length > 0 ? 'border border-dark':'';

    return (
        <div className={condition + ' outerDiv'} >
        <form onSubmit={handleForm} className="Form">
        <input type="hidden" data-id=""/>
        
          <label>
          taskName:<br/>
            <input onChange={e=>setInput(e.target.value)}
             type="text"
              name="taskName"
              style={{width:'95%'}}
              /><br/>
          </label>
        
          <br/>
          <input className='inputcss'   type="submit" value="Submit" /><br/>
          <button  onClick={cancelForm}   type="button" className="Cancel">Cancel</button>
        </form>
        </div>
    )
}

export default EditForm
