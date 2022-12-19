import React from 'react'

const Modal = (props) => {




    const handleClick = ( ) => {


    
    }

const onChange = ( ) => {



}




  return (
    <div>
<button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Launch edit modal
</button>

<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit this Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="my-3">
  <div className="mb-3">

    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title'  aria-describedby="emailHelp"  onChange={onChange}/>
  </div> 
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" >description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
  </div>


  <div className="mb-3">
    <label htmlFor="description" className="form-label" >tag</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal
