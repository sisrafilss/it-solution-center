import React from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    return (
        <main className="m-5">
            <div className="container-fluid">
                <div className="row">
                    <Cards></Cards>
                    <Cart></Cart>
                </div>
            </div>
        </main>
    );
};

export default Main;