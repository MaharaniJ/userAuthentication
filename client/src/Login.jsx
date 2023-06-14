import React,{useState,useContext} from 'react'
import axios from 'axios'
import { Store } from './App'
import {Navigate} from 'react-router-dom'


function Login() {
  const [token,setToken] = useContext(Store)
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const handlesubmit = e=>{
        e.preventDefault()
        axios.post("http://localhost:5000/login",data)
          .then(res=>{
                return setToken(res.data.token)
            })
            
          .catch(err=>{
                console.log(err)
            })
    }
    if(token){
      <Navigate to='/userprofile' />
    }
  return (
    <div>
        <center>
            <form onSubmit={handlesubmit}>
                <label>Email</label>
                                <input type="text" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
                                <label>Password</label>
                                <input type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
                                <button type="submit">Login</button>
            </form>
        </center>
    </div>
  )
}

export default Login