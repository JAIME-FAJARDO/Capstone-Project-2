import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
   
const SingleProductPage = ({cart, setCart}) => {
const [product, setProduct] = useState([]);
const { productId } = useParams();

console.log("Id",productId);

useEffect(() => {
    
    const fetchProduct = async () => {
            
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        // const response = await fetch('https://fakestoreapi.com/products/14');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setProduct(data);
        
    }
    
    fetchProduct().catch(console.error)

}, [])
console.log("cart", cart)

function addToCart(product) {
    const cartItem = {
        ...product,
        quantity: 1
    }
    setCart([...cart, cartItem]);

}

return (
    <div>
        <h1>Single Product</h1>
        <ul>
            {/* {product.map(product => ( */}
                <li className="product" key={product.id}>
                    <h3>{product.description}</h3>
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title}/>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
            {/* ))} */}
        </ul>
    </div>
)
}

export default SingleProductPage;