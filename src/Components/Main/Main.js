import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [itPersons, setItpersons] = useState( [] );
    useEffect( () => {
        fetch('./itpersons.JSON')
        .then(res => res.json())
        .then(data => setItpersons(data));
    }, [])

    return (
        <main className="m-5">
            <div className="container-fluid">
                <div className="row">
                    <Cards itPersons={itPersons} ></Cards>
                    <Cart></Cart>
                </div>
            </div>
        </main>
    );
};

export default Main;