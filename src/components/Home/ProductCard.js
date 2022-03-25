import { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ItemCounter from "../reusable/ItemCounter";

import { Context } from "../../store";

import { addToCart, replaceProduct } from "../../actions";

const ProductCard = ({ product }) => {
  const [{ cart }, dispatch] = useContext(Context);
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  const handleClick = () => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) return dispatch(replaceProduct(product.id, count));

    dispatch(addToCart(product, count));
  };

  return (
    <Grid item xs={4} sm={2} md={2}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            src={product.thumbnailUrl}
            alt={product.title}
            sx={{ maxWidth: "150px", alignSelf: "center" }}
          />
          <CardContent>
            <Typography component="h2" variant="h6">
              {product.title}
            </Typography>
          </CardContent>
        </Box>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <ItemCounter
            count={count}
            addItem={addItem}
            removeItem={removeItem}
          />
          <Button variant="contained" onClick={handleClick}>
            ajouter au panier
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
