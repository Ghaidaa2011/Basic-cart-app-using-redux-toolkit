const Product = (props) => {
    return ( 
        <div className="card">
            <h1>{props.product.title}</h1>
            <img src={props.product.image} alt="" />
            <span>{props.product.price} $</span>
        </div>
    );
}

export default Product;