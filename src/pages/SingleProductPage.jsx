import { useState, useEffect } from 'react';
   
const SingleProductPage = ({cart, setCart}) => {
const [product, setProduct] = useState([]);

useEffect(() => {
    
    const fetchProduct = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products/{id}')
        const product = await response.json();
        console.log(product);
        setProduct(product);
    }
    
    fetchProduct();
}, [])

function addToCart(product) {
    const cartItem = {
        ...product,
        quantity: 1
    }
    setCart([...cart, cartItem]);

}

return (
    <div>
        <h1>Product</h1>
        <ul>
            {product.map(product => (
                <li className="product" key={product.id}>
                    <h3>{product.description}</h3>
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title}/>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default ProductsPage;