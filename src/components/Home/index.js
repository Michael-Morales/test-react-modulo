import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Title from "../reusable/Title";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Title content="mes produits" />

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 4, md: 6 }}
        mb={2}
      >
        {products.map(({ id, title, thumbnailUrl }) => (
          <ProductCard key={id} content={title} src={thumbnailUrl} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
