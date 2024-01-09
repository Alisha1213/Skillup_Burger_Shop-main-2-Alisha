// Write all the code here

import React, { useState } from "react";
import MenuCard from "./MenuCard";
import burger1 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger1.png";
import burger2 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger2.png";
import burger3 from "/Users/alisharai/Desktop/Web Developmental Fundamental/Skillup_Burger_Shop/src/assets/burger3.png";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.itemNum === item.itemNum);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.itemNum === item.itemNum ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <MenuCard
        itemNum={1}
        burgerSrc={burger1}
        price={25}
        title="Cheese Burger"
        handler={() => addToCartHandler({ itemNum: 1, title: "Cheese Burger", price: 200 })}
        delay={0.1}
      />
      <MenuCard
        itemNum={2}
        burgerSrc={burger2}
        price={35}
        title="Veg Cheese Burger"
        handler={() => addToCartHandler({ itemNum: 2, title: "Veggie Burger", price: 250 })}
        delay={0.2}
      />
      <MenuCard
        itemNum={3}
        burgerSrc={burger3}
        price={50}
        title="Cheese Burger with Fries"
        handler={() => addToCartHandler({ itemNum: 3, title: "Big Mac Burger", price: 310 })}
        delay={0.3}
      />
    </div>
  );
};

export default Menu;


