import React from 'react';
import { useCart } from "react-use-cart";

function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return <h3 className="text-center">Your Cart is Empty</h3>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">Cart={totalUniqueItems} Total Items={totalItems}</div>
                <table className="table table-hover m-0">
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={item.image} style={{ height: "6rem" }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity({item.quantity})</td>
                                   <td> <button className="btn btn-info ms-2"
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button className="btn btn-info ms-2"
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                   <button className="btn btn-danger ms-2"
                                        onClick={() => removeItem(item.id)}>Remove Item</button></td>
                            </tr>
                    )
                    })}
                </tbody>
            </table>
            <div className="col-auto ms-auto"><h2>Total Amount : ${cartTotal}</h2></div>
            <div className="col-auto">
                <button className="btn btn-danger "
                onClick={emptyCart}>Empty Cart</button>
            </div>
            <div className="col-auto">
                <button className="btn btn-danger "
                >Buy Now</button>
            </div>

        </div>
        </section >
    )
}

export default Cart
