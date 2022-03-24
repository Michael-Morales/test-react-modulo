import Tab from "@mui/material/Tab";

const LinkTab = (props) => {
  return <Tab component="a" onClick={(e) => e.preventDefault()} {...props} />;
};

export default LinkTab;
