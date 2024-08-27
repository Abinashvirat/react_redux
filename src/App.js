import React from "react";
import SearchAppBar from './components/appbar';
import Bod from './components/bodypart';
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route

function App() {
  return (
    <Router> {/* Wrap everything inside the Router */}
      <div className="App">
        <SearchAppBar /> {/* App bar which contains navigation including the cart */}
        <br />
        <Routes> {/* Define routes */}
          <Route path="/" element={<Bod />} /> {/* Default route */}
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
