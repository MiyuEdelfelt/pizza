import React from 'react';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Pizzería Mamma Mia!</h1>
      <CardPizza />
    </div>
  );
};

export default Home;
