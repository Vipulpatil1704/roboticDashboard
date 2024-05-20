import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    let navigate=useNavigate();
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    function onChange(event) {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username: credentials.username, password: credentials.password})
        })
        const json=await response.json();
        console.log(json);
        if(!json.success){
            alert("enter valid credentials");
        }
        if(json.success){
            localStorage.setItem('authToken',json.authToken);
            navigate("/");
        }

    }
    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" name='username' value={credentials.username} onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <Link to={"/createuser"} className='m-3 btn btn-danger'>I am a new User</Link> */}
                </form>
            </div>
        </div>
    )
}
