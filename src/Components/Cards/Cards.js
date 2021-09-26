import React from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {
    return (
        <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                
            </div>
        </div>
    );
};

export default Cards;