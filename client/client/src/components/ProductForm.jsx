import React, {useState} from 'react';
import axios from 'axios';


const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
                setTitle("");
                setPrice(0.00);
                setDescription("");
            })
            .catch(err => console.log(err));

    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Title:</label>
                <input type="text" onChange = {(event) => setTitle(event.target.value)} value={title}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" step="0.01" onChange = {(event) => setPrice(event.target.value)} value={price}/>
            </div>
            <div>
                <label>Description:</label>
                <textarea id="description" onChange = {(event) => setDescription(event.target.value)} value={description}/>
            </div>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;