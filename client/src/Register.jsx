import React,{useState} from 'react';
import axios from 'axios';

function Register() {
    const [data,setData] = useState(
       {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
       }
    ) 
    const handleChange = (e) => {
        setData({
          ...data,
            [e.target.name]:e.target.value
        })
}
const submitHandler = e=>{
    e.preventDefault();
    axios.post("http://localhost:5000/register",data).then(
        res=>alert(res.data)
        );
}
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h3>Register</h3>
                <input type="text" onChange={handleChange}  name="username" placeholder="User Name" /><br />
                <input type="email" onChange={handleChange} name="email" placeholder="Email" /><br />
                <input type="password" onChange={handleChange} name="password" placeholder="Password" /><br />
                <input type="password"onChange={handleChange}  name="confirmPassword" placeholder="Confirm Password" /><br />
                <button type="submit" value="Register" />
            </form>
        </center>
    </div>
  )
}

export default Register