import { Link } from "react-router-dom"

export default function NavBar ({ token, setToken }) {
    // TODO show different links if logged in or not
    // TODO Implement logout functionality
    function logout() {
        setToken(null);
        localStorage.removeItem("token");
    }
    return (
        <header>

            <nav>
                <ul>
                    <li><Link to="/productspage">Products</Link></li>
                    { token && <li><Link to="/profile">Profile</Link></li> }
                    { !token && <li><Link to="/login">Login</Link></li> }
                    { !token && <li><Link to="/register">Register</Link></li> }
                    { token && <li><button onClick={logout}>Logout</button></li> }
                </ul>

            </nav>
        </header>
    )
}