import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import LinkTab from "./LinkTab";

const Nav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <LinkTab label="Accueil" to="/" />
        <LinkTab label="Panier" to="/cart" />
      </Tabs>
    </Box>
  );
};

export default Nav;
