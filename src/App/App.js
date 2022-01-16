import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddTrip from "../components/AddTrip";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
