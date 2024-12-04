import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Detail from "./Detail";
import Favs from "./Favs";
import Layout from "../Layout/Layout";

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dentist/:id" element={<Detail />} />
      <Route path="/favs" element={<Favs />} />
    </Route>
  </Routes>
);

export default Router;
