import { Link } from "react-router-dom"

export default function Navbar ({ cart, setCart, token, setToken }) {
    // TODO show different links if logged in or not
    // TODO Implement logout functionality
    function logout() {
        setToken(null);
        localStorage.removeItem("token");
        }
    function deleteItem(id) {
        setCart(cart.filter(item => item.id !==id));
       
    }
    return (
        <header>

            <nav>
                { token && <span>Items in the Cart {cart.length}</span> }
                <ul>
                        
                    <li><Link to="/productspage">Products</Link></li>
                    
                    { token && <li><Link to="/profile">Profile</Link></li> }
                    { !token && <li><Link to="/login">Login</Link></li> }
                    { !token && <li><Link to="/register">Register</Link></li> }
                    { token && <li><button onClick={logout}>Logout</button></li> }
                
                    {cart.map(item =>(
                        <li key={item.id}>{item.title} {item.price}<span onClick={() => deleteItem(item.id)}>❌</span></li>
                    ))}          
                
                </ul>
                
                { token && <h2>Total = {cart.reduce((acc, item) => acc + item.price, 0)}</h2> }

            </nav>
        </header>
    )
}