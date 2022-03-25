import ProductDetail from "./pages/product detail/product detail";
import ProductList from "./pages/product list/product list";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import {CartProvider } from "./context/cart context";
import Cart from "./pages/cart/cart";


function App() {
  return (
    <CartProvider>
    <Cart></Cart>
      <Router>
        <Routes>
            {/* <Route path="/" element={<ProductList></ProductList>}/>
            <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}/> */}
        </Routes>
      </Router>
    </CartProvider>

  );
}

export default App;
