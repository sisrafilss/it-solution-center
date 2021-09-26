import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    // Tracks on data comming from outside
    const [itPersons, setItpersons] = useState( [] );

    // Track on Event handler
    const [persons, setPersons] = useState( [] );

    // Fetching data and setting them on state
    useEffect( () => {
        fetch('./itpersons.JSON')
        .then(res => res.json())
        .then(data => setItpersons(data));
    }, []);

    // Handling Add to Cart button click event
    const handleAddPersonToCart = (person) => {
        const newPerson = [...persons, person];
        setPersons(newPerson);
    }

    return (
        <main className="m-5">
            <div className="container-fluid">
                <div className="row">
                    {/* Sending clickhandler and persons data to Card's props */}
                    <Cards 
                    handleAddPersonToCart={handleAddPersonToCart}
                    itPersons={itPersons} 
                    ></Cards>
                    {/* Sending Person's data to Cart's props  */}
                    <Cart persons={persons} ></Cart>
                </div>
            </div>
        </main>
    );
};

export default Main;