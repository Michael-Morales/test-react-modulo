import { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CartItem from "./CartItem";
import Title from "../reusable/Title";

import { Context } from "../../store";

const Cart = () => {
  const [{ cart }] = useContext(Context);

  return (
    <Box>
      <Title content={"mon panier"} />

      <Grid container direction="column" alignItems="center" spacing={2} mb={2}>
        {cart.map((item) => (
          <CartItem key={item.product.id} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
