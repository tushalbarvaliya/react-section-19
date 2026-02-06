import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";

function App() {
  return (
    <CartProvider>
    <Header></Header>
    <Meals/>
    </CartProvider>
  );
}

export default App;
