import ProductsData from '../data/ProductsData';
import Product from '../components/Product';
import { useState, useEffect } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('http://fakestoreapi.com/products')
        .then( (response)=> response.json())
        .then( (data)=> setProducts(data))
    }, []);

    const ProductsData = products.map( (product)=> {
        return product.price >100 && (
            <Product key={product.id} product={product} />
        );
    });

    return ( 
        <div className="product-list">
            { products.length === 0 ? (<div>Loading...</div>) : <div>{ProductsData}</div> }
        </div>
    );
}

export default ProductList;