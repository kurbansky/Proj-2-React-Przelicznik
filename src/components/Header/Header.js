import "./Header.css";
import Logo from "../Header/Logo";
import Box from "../Header/Box";
import Converter from "../Converter/Converter";

const Header = () => {
  return (
    <div className="container-body">
      <Box></Box>
      <div className="container-img">
        <Logo></Logo>
      </div>
      <div className="exch-container">
        <Converter></Converter>
      </div>
    </div>
  );
};

export default Header;
