
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Orders from "./pages/Orders.js";
import NewOrders from "./pages/NewOrders.js";
import OrdersReleased from "./pages/OrdersReleased.js";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />  
        <Route path="/orders" element={<Orders />} />  
        <Route path="/new-order" element={<NewOrders />} />  
        <Route path="/orders-released" element={<OrdersReleased />} />  
      </Routes>
    </Router>
  );
}

export default App;
