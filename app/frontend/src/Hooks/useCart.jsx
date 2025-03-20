import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("car");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleClickAddCar = (id, quantidade) => {
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    let updatedCart;
    if (existingProductIndex !== -1) {
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      );
    } else {
      updatedCart = [...cart, { id, quantidade }];
    }

    setCart(updatedCart);
    localStorage.setItem("car", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return { cart, handleClickAddCar };
}
