import React,{useState,createContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import MyProfile from './MyProfile';
import image from "./bg5.jpg"

export const store = createContext();
function App() 
{
  const [token,setToken] = useState(null);
  const bg={
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:"100vh"
  }

  return (
    <div style={bg}>
      <store.Provider value={[token,setToken]}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='Register' element={<Register/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Myprofile' element={<MyProfile/>}/>
        </Routes>

      </Router>
      </store.Provider>
    
        
      
       
    </div>
  )
}

export default App
