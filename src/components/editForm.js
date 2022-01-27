import React from 'react';
import {useState} from 'react';






const EditForm = (prop) => {
  const [input, setInput] = useState("");


const cancelForm = ()=>{
prop.setShowForm(false);
}

  const handleForm = (e) =>{
    e.preventDefault();
  console.log(input);
  console.log(prop.formId,'prop');
  let mapped = prop.tasks.map(e=>{
    console.log(e.id,'id');
if(e.id === parseInt(prop.formId)){
return {...e,...{taskName:input}}
}else{
  return e;
};
  });
prop.setTasks(mapped);

  
  }

let condition =prop.tasks.length > 0 ? 'border border-dark':'';

    return (
        <div className={condition} style={{width:"30%",margin:"auto",textAlign:"center"}} >
        <form onSubmit={handleForm} className="Form">
        <input type="hidden" data-id=""/>
        
          <label>
          taskName:<br/>
            <input onChange={e=>setInput(e.target.value)}
             type="text"
              name="taskName"
              /><br/>
          </label>
        
          <br/>
          <input   style={{width:"49%",marginTop:"5px"}} type="submit" value="Submit" /><br/>
          <button onClick={cancelForm} style={{width:"49%",marginTop:"5px",marginBottom:"5px"}}  type="button" className="Cancel">Cancel</button>
        </form>
        </div>
    )
}

export default EditForm
