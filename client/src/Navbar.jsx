import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
// import { store } from './App';


const Navbar = () => {
  // const [token,setToken] = useContext(store)
  return (
      <div>
          
          {/* {!token ? */}
             <form className="form-inline my-2 my-lg-0">
              <ul>
                  <Link to='/register' ><li>Register</li></Link>
                  <Link to='/login' ><li>Login</li></Link>
              </ul>
              </form>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </nav> */}
{/* } */}
</div>
  )
}

export default Navbar