import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';


const ProductList = (props) => {
    const {products, setProducts} = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    
    return (
        <div>
            
            {products.map((product, index) => {
                return ( 
                    <div key={ index }>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        |
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>                            
                        |
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </div>
                )
            })}
            
        </div>
    )
}
export default ProductList;