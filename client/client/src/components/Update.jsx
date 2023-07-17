import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {setLoaded} = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err));
    }, [id])

    const updateProduct = product => {
        axios.patch(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res);
                setLoaded(false);
                navigate("/products")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            { 
            product && (
                <>
                <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
                <DeleteButton productId={product._id}  successCallback={() => navigate("/products")} />
                </>
            )}
        </div>
    )
}
export default Update;