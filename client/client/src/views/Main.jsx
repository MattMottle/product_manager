import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const {loaded, setLoaded}= props;
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
                setLoaded(true)
            })
            .catch((err)=> console.log(err))
    }, [loaded, setLoaded])

    const removeFromDom = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res)=> {
                console.log(res.data);
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch((err)=> console.log(err))
    }

    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/products', productParam)
            .then(res => {
                console.log(res.data)
                // setProducts([...products, res.data])
                setLoaded(false)
            })
            .catch((err)=>console.log(err));
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0.00} initialDescription=""/>
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;