import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CirculatProgress from "@mui/material/CircularProgress";

import Title from "../reusable/Title";
import ProductCard from "./ProductCard";

import { Context } from "../../store";

const Home = () => {
  const [{ loading, products }] = useContext(Context);

  return (
    <Box>
      <Title content="mes produits" />

      {loading && (
        <Box
          mt={20}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CirculatProgress disableShrink size={100} />
        </Box>
      )}
      {!loading && products.length > 0 && (
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 4, md: 6 }}
          mb={2}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Home;
