import React from "react";
import { Link } from "react-router-dom";
import burger1 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger1.png";
import burger2 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger2.png";
// import burger3 here
import burger3 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger3.png";
const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement} aria-label="Decrement">-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment} aria-label="Increment">+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {
    // Implement the logic to increment the quantity of the specified item
  };

  const decrement = (item) => {
    // Implement the logic to decrement the quantity of the specified item
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          
        // Add the function for decrementing the order by 1 
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
        // Add the function for decrementing the order by 2
          decrement={() => decrement(3)}
        />

        {/* Fill up the code for Cheese Burger similarly */}
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>DKK{50}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>DKK{50 * 0.25}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>DKK{75}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>DKK{50 + 50 * 0.18 + 75}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
