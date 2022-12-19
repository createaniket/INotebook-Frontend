import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Signup = () => {
  const navigate = useNavigate();
  const [ credentials , setCredentials] = useState({name: "",  email: "" , password: ""})

    const handleSubmit = (e ) => {
        e.preventDefault()
        const URL = 'https://inotebook-production.up.railway.app/user/signup'
    
                              axios.post(URL, {name: credentials.name , email:credentials.email , password:credentials.password})
                              .then((response) => {
                                if( response.status===201){
                                  // console.log("egdyeuwvuycsvh" , response.data)
                                  localStorage.setItem('token', response.data.token); 
                                  navigate('/home');
                                }
                              }).catch((error) => {
                                console.log('error ' + error);
                              });
    }


    const onChange = ( e) => {


        setCredentials({...credentials , [e.target.name]: e.target.value })



    } 
  return (
    <div>
      

<div className='container'>


<div>
            <form  onSubmit={handleSubmit}>



            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="name" />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" className="form-control" value={credentials.password} onChange={onChange} name="cpassword" id="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

</div>

    </div>
  )
}
export default Signup
