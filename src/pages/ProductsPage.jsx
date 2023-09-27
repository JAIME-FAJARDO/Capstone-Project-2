import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

   
const ProductsPage = ({cart, setCart}) => {
const [products, setProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('all');
const [priceRange, setPriceRange] = useState(0);
// const [sortBy, setSortBy] = useState('price');
const [sortBy, setSortBy] = useState('none');

const navigate = useNavigate();

useEffect(() => {
    
    
    const fetchProducts = async () => {
        
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const categories = products.map(product => product.category);
        const uniqueCategories = [...new Set(categories)];
       
        setCategories(uniqueCategories);
        console.log(products);
        console.log("categories",categories);

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
    console.log("sortBy", sortBy);
    // if (sortBy === "price") {
    //     // filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    //     return filteredProducts.sort((a, b) => b.price - a.price);

    //     // setProducts(filteredProducts.sort((a, b) => b.price - a.price)) 
    //     } else if(sortBy === 'rating') {
    //         return  filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    //         // setProducts(filteredProducts.sort((a, b) => b.price - a.price))
    //     }    
} 
const sortMethod = {
    none: { method: (a, b) => null },
    price: { method: (a, b) =>  (b.price - a.price )},
    rating: { method: (a, b) => (b.rating.rate - a.rating.rate)},  
}
// function sortByPrice(ascending) {
//     filteredProducts.sort((a, b) => {
//       if (!ascending) {
//         return b.price - a.price
//       }  
//         return a.price - b.price
//     })  
// }
// function sortByRate(ascending) {
//     filteredProducts.sort((a, b) => {
//       if (!ascending) {
//         return b.rate - a.rate
//       }  
//         return a.rate - b.rate
//     })  
// }


let filteredProducts = products;
if (selectedCategory !== 'all') {
    filteredProducts = products.filter(product => product.category === selectedCategory);
}

console.log(products);
console.log(priceRange);
console.log("sortBy", sortBy);

// if (sortBy === 'price') {
//     // sortByPrice(true);
//     sortByPrice();
// // fileteredProducts.sort((a, b) => b.price - a.price);
// } else if(sortBy === 'rating') {
//     // filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
//     sortByRate();
// }

return (
    <div>
        <h1>Products</h1>
        <select onChange={selectCategory}>            
            <option value="all">All</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>

            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            {categories.map(category => {
                <option value={category} key={category}>{category}</option>

            })}
        </select>
        <input type="range" min="0" max="300" value={priceRange} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}/> 
        <h3>Sort By</h3>
    <select value={sortBy} onChange={selectSortBy}>
            <option value="none">None</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            
        </select>
        <ul>
            {/* {products.map(product => ( */}
            {products.sort(sortMethod[sortBy].method).map(product => (

                <li className="product" key={product.id}>
                    <h3>{product.description}</h3>
                    <p>{product.title}</p>
                    <img src={product.image} alt={product.title}/>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <button onClick={() => {
                     navigate(`/productspage/${product.id}`);
                     }}
                     >View Product</button>
                    
                </li>
            ))}
        </ul>
    </div>
)
}

export default ProductsPage;