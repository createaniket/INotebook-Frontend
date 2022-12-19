import NoteContext from "./NoteContext";
import { useState } from "react";
import axios from 'axios'


const NoteState = (props) => {
  
    const notesInitial =  [ ]

    const [notes, setNotes] = useState(notesInitial)


      const fetchNotes = async () => {
      const  User_token =  localStorage.getItem('token')
      const URL = 'https://inotebook-production.up.railway.app/notes/fetchall'
        const AuthString = 'Bearer '.concat(User_token); 
              axios.get(URL, { headers: { Authorization: AuthString } })
                      .then(response => {
                        setNotes(response.data)
                          console.log(response.data);
                        })
                      .catch((error) => {
                          console.log('error ' + error);
                        });
      }




// TO ADD NOTE 
const addNote = (title , description , tag) => {


  const  User_token = localStorage.getItem('token')

  console.log("iuviufuydu", User_token)
  const URL = 'https://inotebook-production.up.railway.app/user/notes/add'


  const AuthString = 'Bearer '.concat(User_token); 
        


                        axios.post(URL, {title: title,  description:description , tag:tag } , { headers: { Authorization: AuthString } })
                        .then((response) => {
                          setNotes(response.data);
                        }).catch((error) => {
                          console.log('error ' + error);
                        });

 }

 //TO Edit Note

 const editNote = (_id , title, description, tag) =>{


  const  User_token =  localStorage.getItem('token')
  const URL = `https://inotebook-production.up.railway.app/user/notes/update/${_id}`


  const AuthString = 'Bearer '.concat(User_token); 







              axios.patch(URL,  { title:title , description:description , tag:tag } ,{ headers: { Authorization: AuthString } })
                      .then(response => {
                        setNotes(response.data)
                          console.log(response.data);
                        })
                      .catch((error) => {
                          console.log('error ' + error);
                        });
  
}
// to delete note
 const deleteNote = (id) =>{

  const  User_token =  localStorage.getItem('token')
  const URL = `https://inotebook-production.up.railway.app/user/notes/delete/${id}`


  const AuthString = 'Bearer '.concat(User_token); 
              axios.delete(URL, { headers: { Authorization: AuthString } })
                      .then(response => {
                        setNotes(response.data)
                          console.log(response.data);
                        })
                      .catch((error) => {
                          console.log('error ' + error);
                        });

}



    


    return (
        <NoteContext.Provider value = {{notes , addNote, deleteNote, editNote , fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;