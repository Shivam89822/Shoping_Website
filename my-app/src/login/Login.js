import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [first1, sec1] = useState({ transform: "scaleX(1)" });
    const [first2, sec2] = useState({ transform: "scaleX(0)" });
    const [login, setLogin] = useState({ transform: "scaleX(1)", display: 'block' });
    const [signup, setSignup] = useState({ transform: "scaleX(0)", display: 'none' });

    const [form, changeForm] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    function onClick1() {
        sec1({ transform: "scaleX(1)" });
        sec2({ transform: "scaleX(0)" });
        setSignup({ transform: "scaleX(0)", display: 'none' });
        setTimeout(() => {
            setLogin({ transform: "scaleX(1)", display: 'block' });
        }, 200);
    }

    function onClick2() {
        sec1({ transform: "scaleX(0)" });
        sec2({ transform: "scaleX(1)" });
        setLogin({ transform: "scaleX(0)", display: 'none' });
        setTimeout(() => {
            setSignup({ transform: "scaleX(1)", display: 'block' });
        }, 200);
    }

    function handleChange(e) {
        changeForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:8080/signup', form);
            alert("Signup successful");
            console.log(data);
            onClick1(); // switch to login after signup
        } catch (e) {
            alert("Signup failed");
            console.log(form);
            console.log(e);
        }
    }

    async function handleSubmit2(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', form);
            localStorage.setItem("token", response.data.token);
            alert("Login successful");
            window.location.reload();

        
             navigate('/home');  // 👈 Navigate using React Router
        } catch (e) {
            alert("Email or password doesn't match");
            console.log(e);
        }
    }
    
    
    return (
        <div className='box' >
            <div className='formBtn'>
                <div className='btnContainer'>
                    <button className='upperbtn' onClick={onClick1}>Login</button>
                    <div style={first1} className='underLine'></div>
                </div>
                <div className='btnContainer'>
                    <button className='upperbtn' onClick={onClick2}>SignUp</button>
                    <div style={first2} className='underLine'></div>
                </div>
            </div>

            <div className="container">
                {/* Login Form */}
                <div id="login" style={login}>
                    <h1 className='loginheader'>Login</h1>
                    <div className='infoBox'>
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="email" name="email" />
                    </div>
                    <div className='infoBox'>
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} type="password" name='password' />
                    </div>
                    <button onClick={handleSubmit2} className='submit'>Submit</button>
                </div>

                {/* Signup Form */}
                <div id="SignUp" style={signup}>
                    <h1 className='loginheader'>Signup</h1>
                    <div className='infoBox'>
                        <label htmlFor="name">Name:</label>
                        <input onChange={handleChange} name='name' type="text" />
                    </div>
                    <div className='infoBox'>
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} type="email" name="email" />
                    </div>
                    <div className='infoBox'>
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange} type="password" name='password' />
                    </div>
                    <div className='infoBox'>
                        <label htmlFor="cpassword">Confirm Password:</label>
                        <input onChange={handleChange} type="password" name='cpassword' />
                    </div>
                    <button className='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
