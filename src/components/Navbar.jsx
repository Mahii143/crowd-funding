import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [name,setName] = useState(''); 
  useEffect(()=>{
    setName(localStorage.getItem('uname')?localStorage.getItem('uname'):'');
  },[name.length]);
  return (
    <div className='app-navbar'>
      <div className="navbar-welcome">
        Welcome to the crowd funding platform <span className="navbar-username username">{name}</span> <button onClick={()=>{localStorage.clear();navigate('/');}}>Logout</button>
      </div>
    </div>
  );
}