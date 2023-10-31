import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Filteres from "./Components/Filteres.jsx";




function App() {

  return (
    <div className="App">
      <Filteres></Filteres>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/coffees" element={<CoffeeList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
