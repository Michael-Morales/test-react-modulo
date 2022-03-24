import Typography from "@mui/material/Typography";

const Title = ({ content }) => {
  return (
    <Typography
      align="center"
      component="h1"
      variant="h3"
      my={4}
      textTransform="capitalize"
    >
      {content}
    </Typography>
  );
};

export default Title;
