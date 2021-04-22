import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <div>Logo</div>
        </div>
        <div className="list-container">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
