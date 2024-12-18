import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Detail from "./Detail";
import Favs from "./Favs";
import Layout from "../Layout/Layout";

const Router = () => (
  <Routes>
    
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dentist/:id" element={<Detail />} />
      <Route path="/favs" element={<Favs />} />
    </Route>
  </Routes>
);

export default Router;
