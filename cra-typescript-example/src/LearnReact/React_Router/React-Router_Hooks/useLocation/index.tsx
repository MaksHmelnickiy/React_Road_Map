import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, RelativeRoutingType, Route, Routes, useNavigate } from "react-router-dom";
import { Pages } from "./pages";
import { SinglePage } from "./useLocation_SinglePage";

export const MyUseLocation = () => {
  return <div>
    <BrowserRouter>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/pages'>Pages</Link></div>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/:id" element= {<SinglePage />} />
      </Routes>
    </BrowserRouter>
  </div>
}