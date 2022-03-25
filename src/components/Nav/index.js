import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Badge from "@mui/material/Badge";

import LinkTab from "./LinkTab";

import { Context } from "../../store";

const Nav = () => {
  const [{ cart }] = useContext(Context);
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: "999",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <LinkTab label="Accueil" to="/" />
        <LinkTab
          label={
            <Badge badgeContent={cart.length} color="primary">
              Panier
            </Badge>
          }
          to="/cart"
        />
      </Tabs>
    </Box>
  );
};

export default Nav;
