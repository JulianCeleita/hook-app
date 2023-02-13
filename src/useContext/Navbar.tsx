import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="about"> About </Link>
      <Link to="Login"> Login </Link>
    </>
  );
};