import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import UserProfile from './UserProfile';

export const Store = createContext();

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <Store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Navbar />
          <Navigate>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/userprofile" component={UserProfile} />
          </Navigate>
        </BrowserRouter>
      </Store.Provider>
    </div>
  );
}

export default App;
