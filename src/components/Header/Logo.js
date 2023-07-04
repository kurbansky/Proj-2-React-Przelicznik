import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img
        src={require("../../assets/charts.jpg")}
        alt="A stock charts on a computer and a mobile phone"
      />
    </div>
  );
};

export default Logo;
