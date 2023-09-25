import { useState, useEffect } from "react"
// import { profileData } from "../API"
import { profileData } from "./API"
import { useNavigate } from "react-router-dom"

export default function Profile ({ token })  {
    

    const navigate = useNavigate();
    const [user, setUser] = useState({})
    // const [username, setUsername] = useState('')
    // const [messages, setMessages] = useState([])

    useEffect(() => {
        async function getUser() {
            const user = await profileData(token)
            console.log(user)
            setUser(user)
        }
        getUser()
    }, [token])
    if (!token) {
        navigate('/login')
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.username}</h2>            
        </div>
    )
}