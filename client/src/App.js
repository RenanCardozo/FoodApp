import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCart = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
