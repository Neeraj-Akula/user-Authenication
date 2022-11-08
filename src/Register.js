import React,{useState} from 'react'
import axios from 'axios';

const Register = () =>
 {
     const myP=
     {
        padding:"8px",
        margin:"4px"
     }
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:3000/Register',data).then(
            res => {alert(res.data);setData({
                username:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )

    }
    return (
        <div styel={{margin:" 39px auto"}}>
            <center>
            <form onSubmit={submitHandler}  autoComplete="off">
                <h3 style={{color:"white"}}>Register</h3>
                <input style={myP} type="text" onChange={changeHandler} name="username" placeholder="User Name" /><br />
                <input style={myP} type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input style={myP} type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input style={myP} type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input style={{padding:"3px",margin:"8px"}} type="submit" value="Register" /><br />
            </form>
            </center>
        </div>
    )
}

export default Register