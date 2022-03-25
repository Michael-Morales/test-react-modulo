import { useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CartItem from "./CartItem";
import Title from "../reusable/Title";

import { Context } from "../../store";

const Cart = () => {
  const [{ cart }] = useContext(Context);

  return (
    <Box>
      <Title content={"mon panier"} />

      {cart.length === 0 && (
        <Box mt={20}>
          <Typography component="h2" variant="h5" align="center">
            Aucun produit dans votre panier.
          </Typography>
        </Box>
      )}
      {cart.length > 0 && (
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            alignItems="stretch"
            spacing={{ xs: 2, sm: 4 }}
            mb={2}
          >
            {cart.map((item) => (
              <CartItem key={item.product.id} {...item} />
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Cart;
