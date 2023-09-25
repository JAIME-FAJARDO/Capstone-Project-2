import { useState } from "react"
import { loginUser } from "./API";
 
// import { loginUser } from "../API";
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'


export default function Login ({setToken}) {
    // TODO signin with correct username/password combo
    const navigate = useNavigate();
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    
    async function handleSubmit (e, username, password) {
        e.preventDefault();
        const token = await loginUser(username, password);
        
        console.log("this is a token",token)
        setToken(token);
        localStorage.setItem('token', token);
        navigate('/');
    }
    // if (token) {
    //     navigate('/');
    // }    
    
    return (
        <div>
            <h1>Login</h1>
           <AuthForm buttonText="Login" handleSubmit={handleSubmit}/>
        </div>
    )
}
