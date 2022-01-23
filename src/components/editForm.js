import React from 'react'

const EditForm = () => {
    return (
        <div >
        <form  className="Form">
        <input type="hidden"/>
        
          <label>
            Title:<br/>
            <input
             type="text"
              name="Title"
              /><br/>
          </label>
         <br/>
          <label>
          Price:<br/>
            <input
             type="number"
              name="Price"
              /><br/>
          </label>
          <br/>
          <br/>
          <label>
          Description:<br/>
            <textarea 
             type="text"
              name="Description"
              /><br/>
        
          </label>
          <br/>
          <label>
          imageUrl:<br/>
            <input
             type="text"
              name="imageUrl"
              /><br/>
          </label>
          <input type="submit" value="Submit" /><br/>
          <button type="button" className="Cancel">Cancel</button>
        </form>
        </div>
    )
}

export default EditForm
