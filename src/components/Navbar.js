import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/search">Search</Link>
      <Link to="/design">Design</Link>
    </>
  );
};
