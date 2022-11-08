import React from 'react'
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { store } from './App';


function Navbar() 
{
  const [token, setToken] = useContext(store)

   const mystyle={
        display:"flex",
        justifyContent:"center",
         backgroundColor:"#072145",
        backgroundBlendMode: "screen",
        alignItems:"around",
        margin:"18px auto",
        
    }
    const list={
        padding:"4px",
        color:"white",
        backgroundColor:"black",
        border:"2px solid black",
        margin:"auto 6px",
        listStyleType: "none",
    }

   
  return (
    <>
      {!token &&
      <ul style={mystyle}>
          <Link to='/Register'><li style={list}>Register</li></Link>
          <Link to='/Login'><li style={list}>login</li></Link>
      </ul>
    }
    </>
  
  )

}

export default Navbar
