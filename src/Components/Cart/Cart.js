import React from 'react';
import CartEntry from '../CartEntry/CartEntry';
import './Cart.css';

const Cart = (props) => {

    const persons = props.persons;

    return (
        <div className="col-md-3">
            <div className="secondary-text  cart-bg mb-3">
                <div className="card-header cart-header"><i className="fas fa-shopping-cart"></i> Order Summary</div>
                <div className="card-body">
                    <h5 className="card-title">Person Added: {persons.length} </h5>
                    <h5 className="card-title">Total Cost: {persons.reduce( (prev, curr) => prev + curr.salary, 0)} </h5>
                </div>
                <table className="table p-3">

                    {
                        persons.map(person => <CartEntry person={person} ></CartEntry>)
                    }

                </table>
            </div>
        </div>
    );
};

export default Cart;