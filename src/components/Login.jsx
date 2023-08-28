

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigate('/home');
    }else{
        alert("one of the parameters are empty")
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div class="row">
  <div class="col">
      <input
      class="form-control"
        type="text"
        placeholder="Username"
        aria-label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      </div>
      <div class="col">
      
      <input
       class="form-control"
        type="password"
        placeholder="Password"
        aria-label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      </div>
      </div>
      <button class="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;