import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CardContext";

const CardPizza = (prop) => {
  const { name, img, price, ingredients } = prop;
  const { carts, setCarts } = useContext(CartContext);

  const handleAddToCart = () => {
    const newCart = {
      img: img,
      name: name,
      price: price,
      qty: 1,
    };

    setCarts((prevCarts) => [...prevCarts, newCart]);
    console.log("Cart:", carts);
  };

  return (
    <Card className="card-pizza">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-center">Pizza {name}</Card.Title>
        <hr />
      </Card.Body>

      <Card.Text>
        <p className="text-center fs-3">Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="text-center fw-bold fs-5 mb-0">
          Precio: ${price.toLocaleString()}
        </p>
      </Card.Text>

      <Card.Body className="d-flex justify-content-between">
        <Button variant="outline-dark" className="flex-grow-1 me-2">
          Ver mas <FaEye />
        </Button>
        <Button
          variant="dark"
          className="flex-grow-1"
          onClick={handleAddToCart}
        >
          Añadir <FaShoppingCart />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
