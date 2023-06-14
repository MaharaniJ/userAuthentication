import React,{useContext,useState,useEffect} from 'react';
import { Store } from './App';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function UserProfile() {
  const [token,setToken] = useContext(Store);
  const [data,setData] = useState(null)

  useEffect(()=>{
  axios.get('http://localhost:5000/userprofile',{
    headers:{
      'x-token': token
    }
  }).then(res=>setData(res.data)).catch((e)=>console.log(e))
  },[])
  if(!token){
    return <Navigate to='/login' />
  }
  // useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('http://localhost:5000/userprofile', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'x-token': `Bearer ${token}`
  //         }
  //       })
  //       const data = await response.json()
  //       setData(data)
  //     }
  //     fetchData()
  //   }, [token])
  return (
    <div>
      {
        data && <center>
          Welcome : {data.username}
          <button onClick={()=>setToken(null)}>Logout</button>
        </center>
      }
    </div>
  );
}

export default UserProfile;
