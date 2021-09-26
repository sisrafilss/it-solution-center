import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <div className="col cart-text-color" >
            <div className="card h-100" style={{ backgroundColor: "#316B83" }}>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_a_software_engineer.jpg" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column align-items-center">
                    {/* <h5 className="card-title"></h5> */}
                    <p className="card-text mb-1"> <span className="font-weight-500">Name: </span>John Doe</p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Role: </span> Software Architect </p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Exprerience: </span> 2 Years </p>
                    <p className="card-text mb-1"> <span className="font-weight-500">Age: </span>26</p>
                    <p className="card-text"> <span className="font-weight-500">Salary: </span>740000 </p>
                    <button className="btn btn-secondary btn-regular"><i className="fas fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;