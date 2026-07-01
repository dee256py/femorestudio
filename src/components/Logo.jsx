import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark">F</span>

      <span className="logo-text">
        Femore<span>studio</span>
      </span>
    </Link>
  );
}

export default Logo;