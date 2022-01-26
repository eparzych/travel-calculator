import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddTrip from "../pages/AddTrip";
import EditTrip from "../pages/EditTrip";

export default function Routing(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddTrip />} />
              <Route path="/edit/:id" element={<EditTrip />} />
            </Routes>
        </BrowserRouter>
    )
}
