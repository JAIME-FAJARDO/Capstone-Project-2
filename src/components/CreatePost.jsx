import { useState } from "react"

export default function CreatePost ({ token }) {
    // TODO see a list of all posts
    // TODO Create a new post
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    
    return (
        <form>
            <label htmlFor="title">Title</label> 
            <input 
                type="text" 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                id="description"
                value={description}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea id="description" />

            <label htmlFor="price">Price</label>
            <input 
                type="text" 
                id="price"
                value={price}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <input 
                type="text" 
                id="location"
                value={location}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <label htmlFor="willDeliver">Will Deliver</label>
            <input 
                type="checkbox" 
                id="willDeliver"
                value={willDeliver}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <button type="submit">Create Post</button>
        </form>
    )
}