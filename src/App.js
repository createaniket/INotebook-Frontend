import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Components/Home';
import Home from './Components/Home';

import About from './Components/About';






import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (
   
    <>

    <NoteState >

    <Router> 




  <Navbar />


  <Routes>
          <Route path="/Home" element={< Home />}>      </Route>
          <Route path="/about" element={< About />}>      </Route>
          <Route path="/login" element={< Login />}>      </Route>
          <Route path="/signup" element={< Signup />}>      </Route>


        </Routes>



      
    
  </Router>

  </NoteState>

    
    </>
  );
}

export default App;
