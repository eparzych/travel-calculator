import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddTrip from "../pages/AddTrip";
import EditTrip from "../pages/EditTrip"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTrip />} />
        <Route path="/:id" element={<EditTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
