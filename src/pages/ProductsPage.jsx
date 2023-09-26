import { useState, useEffect } from 'react';
   
const ProductsPage = ({cart, setCart}) => {
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');
const [priceRange, setPriceRange] = useState(0);
const [sortBy, setSortBy] = useState('price');

useEffect(() => {
    
    
    const fetchProducts = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products');
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

function selectSortBy (e) {
    setSortBy(e.target.value);
} 

function sortByPrice(ascending) {
    fileteredProducts.sort((a, b) => {
      if (!ascending) {
        return b.price - a.price
      }  
        return a.price - b.price
    })  
}

let fileteredProducts = products;
if (selectedCategory !== 'all') {
    fileteredProducts = products.filter(product => product.category === selectedCategory);
}

console.log(products);
console.log(priceRange);
console.log(sortBy);

if (sortBy === 'price') {
    // sortByPrice(true);
    sortByPrice();
// fileteredProducts.sort((a, b) => b.price - a.price);
} else if(sortBy === 'rating') {
    fileteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
}

return (
    <div>
        <h1>Products</h1>
        <select onChange={selectCategory}>            
            <option value="all">All</option>
            {categories.map(category => {
                <option value={category} key={category}></option>

            })}
        </select>
        <input type="range" min="0" max="300" value={priceRange} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}/> 
        <h3>Sort By</h3>
    <select value={sortBy} onChange={selectSortBy}></select>
        <select>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
        </select>
        <ul>
            {products.map(product => (
                <li className="product" key={product.id}>
                    <h3>{product.description}</h3>
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title}/>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default ProductsPage;