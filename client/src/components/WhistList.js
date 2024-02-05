import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import '../styles/WhistList.css'
function WhistList() {
    const navigate = useNavigate();
    const[suc,setSuc]=useState();
    axios.defaults.withCredentials=true;
    useEffect(() => {
    axios.get('http://localhost:4000/users/', { withCredentials: true })
      .then(res => {
        if (res.data === 'Users Dashboard Success') {
          setSuc("Success ok");
        } else {
          navigate('/notfound');
        }
      })
    .catch(err => console.log(err));
  }, [navigate]);
  return (
    <div val={{suc}}>WhistList</div>
  )
}

export default WhistList