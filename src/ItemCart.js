import React from 'react';
import { useCart } from 'react-use-cart';

const ItemCart = (props) => {
const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" >
            <div className="card p-0 overfow-hidden h-100 shadow" >
                <img src={props.img} className="card-img-top img-fluid" />
                <div className="card-body" >
                    <h5 className="text-center">{props.name}</h5>
                    <p className="text-center">{props.brand}</p>
                    <p className="text-center">${props.price}</p>
                    <p className="text-center">{props.category}</p>
                    <p className="text-center"><button className="btn btn-success btn-center"
                    onClick={()=>addItem(props.item)}>Add To Cart</button></p>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;