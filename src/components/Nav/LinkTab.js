import { NavLink } from "react-router-dom";
import Tab from "@mui/material/Tab";

const LinkTab = (props) => {
  return <Tab component={NavLink} {...props} />;
};

export default LinkTab;
