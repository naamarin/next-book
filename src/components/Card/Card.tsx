"use client";
import React from 'react';

interface CardProps {
    data: any;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="card">
            <h1>{data.title}</h1>
        </div>
    );
};

export default Card;