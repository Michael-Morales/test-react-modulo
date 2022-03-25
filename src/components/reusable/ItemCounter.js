import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";

const ItemCounter = ({ count, removeItem, addItem }) => {
  return (
    <Box mb={0.5} sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <IconButton onClick={removeItem}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1">{count}</Typography>
      <IconButton onClick={addItem}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default ItemCounter;
