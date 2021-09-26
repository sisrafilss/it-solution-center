import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, role, age, image, salary, experience} = props.itPerson;
    return (
        <div className="col cart-text-color" >

            <div className="card h-100" style={{ backgroundColor: "#316B83" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column align-items-center">
                    {/* <h5 className="card-title"></h5> */}
                    <p className="card-text mb-1"> <span className="font-weight-500">Name: </span> {name} </p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Role: </span> {role} </p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Exprerience: </span> {experience} </p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Age: </span> {age} </p>
                    <p className="card-text"> <span className="font-weight-500">Salary: </span> {salary} </p>
                    <button className="btn btn-secondary btn-regular"><i className="fas fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;