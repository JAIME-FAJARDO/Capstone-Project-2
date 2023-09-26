import { useState, useEffect } from 'react';
   
const ProductsPage = ({cart, setCart}) => {
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');
const [priceRange, setPriceRange] = useState(0, 1000);
useEffect(() => {
    
    const fetchProducts = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json();
        const categories = products.map(product => product.category);
        const uniqueCategories = [...new Set(categories)];
       
        setCategories(uniqueCategories);
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
console.log(categories);
function selectCategory (e) {
    setSelectedCategory(e.target.value);
}
let fileteredProducts = products;
if (selectedCategory !== 'all') {
    fileteredProducts = products.filter(product => product.category === selectedCategory);
}

console.log(products);
return (
    <div>
        <h1>Products</h1>
        <select onChange={selectCategory}>            
            <option value="all">All</option>
            {categories.map(category => {
                <option value={category} key={category}></option>

            })}
        </select>
        <input type="range" min="0" max="1000" value={priceRange[0]} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}/> 
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