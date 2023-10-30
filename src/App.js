import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'




function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/coffees" element={<CoffeeList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
