import { useState, useEffect } from "react";
const PizzaPage = () => {
  const [pizza, setPizza] = useState([]);

  const getPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    return setPizza(data);
  };
  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="card-title text-center mb-5 ">Pizza {pizza.name}</h1>
        <img
          className="card-img-top pizza-image mx-auto d-block"
          src={pizza.img}
          alt={pizza.name}
        />
        <div className="card-body">
          <p className="card-text mx-3">{pizza.desc}</p>
          <h2 className="text-center">Ingredientes:</h2>
          {pizza.ingredients && (
            <ul className="list-group list-group-flush">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item text-center">
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
          <div className="d-flex justify-content-end align-items-center mt-3">
            <p className="card-text text-danger fs-2 mx-3 mb-0">
              $ {pizza.price ? pizza.price.toLocaleString() : ""}
            </p>
            <button className="btn btn-dark">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
