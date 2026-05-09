import React, { useState } from "react";

function ProductList() {
  const plants = {
    Indoor: [
      {
        id: 1,
        name: "Snake Plant",
        price: 20,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 25,
        image: "https://via.placeholder.com/100"
      }
    ],

    Outdoor: [
      {
        id: 3,
        name: "Aloe Vera",
        price: 15,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 4,
        name: "Cactus",
        price: 18,
        image: "https://via.placeholder.com/100"
      }
    ],

    Decorative: [
      {
        id: 5,
        name: "Bonsai",
        price: 40,
        image: "https://via.placeholder.com/100"
      },
      {
        id: 6,
        name: "Money Plant",
        price: 22,
        image: "https://via.placeholder.com/100"
      }
    ]
  };

  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <h1>Paradise Nursery</h1>

        <h3>Cart Items: {cart.length}</h3>
      </nav>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          {items.map((plant) => (
            <div
              key={plant.id}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px"
              }}
            >
              <img src={plant.image} alt={plant.name} />

              <h3>{plant.name}</h3>

              <p>${plant.price}</p>

              <button
                onClick={() => addToCart(plant)}
                disabled={cart.find((item) => item.id === plant.id)}
              >
                {cart.find((item) => item.id === plant.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
