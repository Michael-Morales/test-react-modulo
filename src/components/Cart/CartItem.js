import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

import ItemCounter from "../reusable/ItemCounter";

import { Context } from "../../store";

import { increaseCount, decreaseCount, removeProduct } from "../../actions";

const CartItem = ({ count, product }) => {
  const [, dispatch] = useContext(Context);

  const handleIncrease = () => dispatch(increaseCount(product.id));

  const handleDecrease = () => dispatch(decreaseCount(product.id));

  const handleRemove = () => dispatch(removeProduct(product.id));

  return (
    <Grid item>
      <Card>
        <CardMedia
          component="img"
          src={product.thumbnailUrl}
          alt={product.title}
          sx={{ maxWidth: "150px" }}
        />
        <Box>
          <CardContent>
            <Typography component="h2" variant="h6">
              {product.title}
            </Typography>
            <ItemCounter
              count={count}
              removeItem={handleDecrease}
              addItem={handleIncrease}
            />
            <IconButton onClick={handleRemove}>
              <ClearIcon />
            </IconButton>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default CartItem;
