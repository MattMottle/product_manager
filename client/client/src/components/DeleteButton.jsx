import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deleteProduct = event => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then( res => {
                successCallback()
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    return(
        <button onClick={deleteProduct}>Delete</button>
    )
}
export default DeleteButton;