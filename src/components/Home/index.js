import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Title from "../reusable/Title";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <Box>
      <Title content="mes produits" />

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 4, md: 6 }}
        mb={2}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Box>
  );
};

export default Home;
