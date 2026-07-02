import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./Components/Product";
import { Home } from "./Components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
