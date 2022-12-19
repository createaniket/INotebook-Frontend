import React , {useContext} from "react";
import NoteContext from "../Context/notes/NoteContext";


const Noteitem = (props) => {
  const context = useContext(NoteContext)
  const {deleteNote} = context
  const { note, updateNote } = props;

  // console.log("ewkkxbleqrcobqe rb" , note)
  return (
    
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-senter">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-regular fa-pen-to-square mx-3 my-2" onClick={ () => {  updateNote(note)}}></i> 
            <i className="fa-solid fa-trash  my-2" onClick={() => { deleteNote(note._id)}}></i>   
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
