import { useState, useEffect } from "react"
// import { fetchPosts } from "../API"
import { fetchPosts } from "./API"


// export default function Posts ({ token }) {
//     // TODO see a list of all posts
//     // TODO Create a new post
//     const [posts, setPosts] = useState([])
    
//     return (
//         <div>
//             <h1>Posts</h1>
//         </div>
//     )
// }

export default function Posts ({ token }) {
// const Posts = () => { 
//     // TODO see a list of all posts
//     // TODO Create a new post
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const products = await fetchPosts();
            // setProducts(products);
        }
        fetchData();

    }, [])

    // console.log(products);
    
    return (
        <div>
           <h1>Products</h1>
             {
              products.map(({id, title, description, price, image , category }) => (          
                <div className="post" key={id}>
                   <h2>{title}</h2>
                   <p>{description}</p>
                   <p>Price: {price}</p>
                   <p>image: {image}</p>
                   <p>Category: {category}</p>
                </div>   
              ))
            } 
        </div>
    )
}
