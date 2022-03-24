import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography component="h2" variant="h6">
          Nom
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
