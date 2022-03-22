import ProductDetail from "./pages/product detail/product detail";
import ProductList from "./pages/product list/product list";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProductList></ProductList>}/>

      <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}/>

    </Routes>
      {/* <ProductList></ProductList>
      <ProductDetail></ProductDetail> */}
    </Router>
  );
}

export default App;
