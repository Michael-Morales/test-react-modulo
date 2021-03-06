import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Nav from "../Nav";
import Home from "../Home";
import Cart from "../Cart";

import useFetchProducts from "../../hooks/useFetchProducts";

const App = () => {
  useFetchProducts();

  return (
    <Container maxWidth="lg">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
};

export default App;
