import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="my-4 container">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                name={pizza.name}
                img={pizza.img}
                price={pizza.price}
                description={pizza.desc}
                ingredients={pizza.ingredients}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
