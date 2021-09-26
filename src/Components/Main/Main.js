import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [itPersons, setItpersons] = useState( [] );
    const [persons, setPersons] = useState( [] );


    useEffect( () => {
        fetch('./itpersons.JSON')
        .then(res => res.json())
        .then(data => setItpersons(data));
    }, []);

    const handleAddPersonToCart = (person) => {
        const newPerson = [...persons, person];
        setPersons(newPerson);
    }

    return (
        <main className="m-5">
            <div className="container-fluid">
                <div className="row">
                    <Cards 

                    handleAddPersonToCart={handleAddPersonToCart}

                    itPersons={itPersons} 
                    ></Cards>
                    <Cart
                    persons={persons}
                    ></Cart>
                </div>
            </div>
        </main>
    );
};

export default Main;