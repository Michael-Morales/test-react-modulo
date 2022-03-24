import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductCard = () => {
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <Grid item xs={4} sm={2} md={2}>
      <Card>
        {/* <CardMedia /> */}
        <CardContent>
          <Typography component="h2" variant="h6">
            Nom
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            mb={0.5}
            sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <IconButton onClick={removeItem}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{count}</Typography>
            <IconButton onClick={addItem}>
              <AddIcon />
            </IconButton>
          </Box>
          <Button variant="contained">ajouter au panier</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
