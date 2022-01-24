import React from 'react';
import {useState} from 'react';






const EditForm = (prop) => {
  const [input, setInput] = useState("");


  const handleForm = (e) =>{
    e.preventDefault();
  console.log(input);


  console.log(prop.tasks,'tasks');
  
  }

    return (
        <div className='border border-dark' style={{width:"30%",margin:"auto",textAlign:"center"}} >
        <form onSubmit={handleForm} className="Form">
        <input type="hidden"/>
        
          <label>
          taskName:<br/>
            <input onChange={e=>setInput(e.target.value)}
             type="text"
              name="taskName"
              /><br/>
          </label>
        
          <br/>
          <input   style={{width:"49%",marginTop:"5px"}} type="submit" value="Submit" /><br/>
          <button style={{width:"49%",marginTop:"5px",marginBottom:"5px"}} onClick={prop .hideForm} type="button" className="Cancel">Cancel</button>
        </form>
        </div>
    )
}

export default EditForm
