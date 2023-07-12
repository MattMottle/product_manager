import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    
    return (
        <div>
            {
                products.map((product, index)=> {
                    return <div key={ index }>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                })
            }
        </div>
    )
}
export default ProductList;