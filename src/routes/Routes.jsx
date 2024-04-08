import React from "react";
import { Route, Router } from "react-router-dom";

export default function Routes() {
  <Router>
    <div className="App">
      <Link to="/">Home</Link>

      <Link to="/about">About Us</Link>

      <Link to="/contact">Contact Us</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  </Router>;
}
