import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="col-md-3 position-fixed bottom-sm-0 end-0">
            <div className="secondary-text  cart-bg mb-3">
                <div className="card-header cart-header"><i className="fas fa-shopping-cart"></i> Order Summary</div>
                <div className="card-body">
                    <h5 className="card-title">Person Added: 0</h5>
                    <h5 className="card-title">Total Cost: 0</h5>
                </div>
                <table className="table p-3">
                        <tbody>
                        <tr className="bg-dark text-light">
                            <td>John Doe</td>
                            <td>74000</td>
                        </tr>
                        <tr className="bg-dark text-light">
                            <td>John Doe</td>
                            <td>74000</td>
                        </tr>
                        <tr className="bg-dark text-light">
                            <td>John Doe</td>
                            <td>74000</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Cart;