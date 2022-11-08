import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import { Navigate} from 'react-router';
import axios from 'axios';


const Myprofile = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:3000/MyProfile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token){
        return <Navigate to='/Login' />
    }
    return (
        <div>
            {
                data &&
            <center>
                <br />
                <div class="card" style={{"width": "18rem"}}>
                
                <div class="card-body">
                    <h2 className="card-title" style={{color:"white"}}>Welcome : {data.username}</h2>
                    <button class="btn btn-primary" onClick={() => setToken(null)}>Logout</button>
                    
                </div>
                </div>
            </center>
        }
        </div>
    )
}

export default Myprofile