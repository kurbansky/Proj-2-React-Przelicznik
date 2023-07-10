import "./Header.css";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Converter from "../Converter/Converter";

const Header = () => {
  return (
    <header className="container-body">
      <Box></Box>
      <Logo></Logo>
      <Converter></Converter>
    </header>
  );
};

export default Header;
