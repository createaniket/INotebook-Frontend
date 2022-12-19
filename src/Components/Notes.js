import React, {useContext, useEffect , useRef, useState} from 'react';
import noteContext from '../Context/notes/NoteContext';
import Noteitem from './Noteitem';
// import Modal from './Modal';


const Notes = () => {
    const context = useContext(noteContext);
    const {notes, fetchNotes , editNote} = context;


    useEffect( () => {
        fetchNotes()
        // eslint-disable-next-line 
    }, [])
    const [note, setNotes] = useState( {_id: "" , etitle: "" , edescription: "" , etag: ""})

    const ref = useRef(null)
    const closeref = useRef(null)

  const   updateNote = (currentNote) => {

    ref.current.click()
  

    setNotes({_id: currentNote._id , etitle:currentNote.title , edescription: currentNote.description , etag: currentNote.tag})
    // editNote({_id: currentNote._id , title:currentNote.title , description: currentNote.description , tag: currentNote.tag})

  }

  const handleClick = ( e) => {
   


    editNote(note._id , note.etitle , note.edescription ,  note.etag)
    closeref.current.click()

    
}

const onChange = (e ) => {

  setNotes({...note , [e.target.name]: e.target.value })


}


    return (
<>
      
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Launch edit modal
</button>

<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-etitle fs-5" id="exampleModalLabel">Edit this Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="my-3">
  <div className="mb-3">

    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name='etitle'  aria-describedby="emailHelp"  onChange={onChange}/>
  </div> 
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" >description</label>
    <input type="text" className="form-control" id="description"   name='edescription' onChange={onChange} />
  </div>


  <div className="mb-3">
    <label htmlFor="tag" className="form-label" >tag</label>
    <input type="text" className="form-control" id="tag"   name='etag' onChange={onChange} />
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={closeref} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note) => {
                return <Noteitem key={note._id} updateNote={updateNote} note={note}/>  
            })}
            </div>
</>

    )
}

export default Notes