import React from 'react';

const CartEntry = (props) => {
    const {name, salary} = props.person;
    return (
        <tbody>
            <tr className="bg-dark text-light">
                <td> {name} </td>
                <td>{salary}</td>
            </tr>

            {/* <tr className="bg-dark text-light">
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
        </tr> */}
        </tbody>
    );
};

export default CartEntry;