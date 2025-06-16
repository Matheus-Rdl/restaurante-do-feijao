import NavSideBar from "./components/NavSideBar";
import "./App.css";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/products" element={<Products />} />  
      </Routes>
    </Router>
  );
}

export default App;
