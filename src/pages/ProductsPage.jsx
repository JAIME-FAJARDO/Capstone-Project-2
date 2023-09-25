import { useState, useEffect } from 'react';
   
const ProductsPage = ({cart, setCart}) => {
const [products, setProducts] = useState([]);

useEffect(() => {
    
    const fetchProducts = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json();
        console.log(products);
        setProducts(products);
    }
    
    fetchProducts();
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
        <h1>Products</h1>
        <ul>
            {products.map(product => (
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