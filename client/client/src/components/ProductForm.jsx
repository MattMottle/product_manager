import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmitProp({
            title,
            price,
            description
        })
        setTitle("")
        setPrice("0.00")
        setDescription("")
        navigate("/products")

    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" step="0.01" name="price" value={price} onChange={(event) => setPrice(event.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
            </div>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;