import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav>
      <Logo />

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;