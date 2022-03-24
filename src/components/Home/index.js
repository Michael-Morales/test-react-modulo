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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Title content="mes produits" />

      {loading && (
        <CirculatProgress
          sx={{ alignSelf: "center" }}
          disableShrink
          size={100}
        />
      )}
      {!loading && products.length > 0 && (
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
      )}
    </Box>
  );
};

export default Home;
