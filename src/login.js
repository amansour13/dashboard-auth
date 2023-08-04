import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);


        async function fetchData  (){
            axios.post("https://dummyjson.com/auth/login",
            {
                username: username,
                password: password
            }
          ).then(response => {
                document.getElementById("invalidData").style.display = 'none';
                localStorage.setItem("token", response.data.token);
                navigate('/dashboard')
            })
            .catch(() => {
                localStorage.setItem("token", "")
                document.getElementById("invalidData").style.display = 'flex';
            });
        }
        fetchData();
       

    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                    <div className='invalid' id='invalidData'>
                        <h5>Invalid Ceredentials *</h5>
                    </div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        required
                    />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;