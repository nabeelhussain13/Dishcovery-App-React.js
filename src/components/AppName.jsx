import { IoFastFoodSharp } from "react-icons/io5";

const AppName = () => {
  return (
    <div className="header">
      <div className="app-icon" style={{ color: "#25855a" }}>
        <IoFastFoodSharp />
      </div>
      <h2 className="app-name">Dishcovery - A Recipe Finder App</h2>
    </div>
  );
};

export default AppName;
