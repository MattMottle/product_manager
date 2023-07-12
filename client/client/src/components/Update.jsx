import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])

    const updateProduct = (event) => {
        event.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/products")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label>
                    <br />
                    <input type="text" 
                    name="title" 
                    value={title}
                    onChange={(event) => {setTitle(event.target.value)}} />
                </p>
                <p>
                    <label>Price:</label>
                    <br />
                    <input type="number" step="0.01"
                    name="price" 
                    value={price}
                    onChange={(event) => {setPrice(event.target.value)}} />
                </p>
                <p>
                    <label>Description:</label>
                    <br />
                    <input type="text"
                    name="description" 
                    value={description}
                    onChange={(event) => {setDescription(event.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;