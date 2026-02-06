import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";
import Cart from "./components/Cart";
import {UserProgressContextProvider}  from "./store/UserProgressContext";
import Checkout from "./components/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartProvider>
        <Header></Header>
        <Meals />
        <Cart />
        <Checkout/>
      </CartProvider>
    </UserProgressContextProvider>
  );
}

export default App;
