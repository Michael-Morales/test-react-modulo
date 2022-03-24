import Box from "@mui/material/Box";

import Title from "../reusable/Title";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <Box>
      <Title content="mes produits" />
      <ProductCard />
    </Box>
  );
};

export default Home;
