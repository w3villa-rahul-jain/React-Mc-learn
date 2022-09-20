import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar our-container">
        <div className="nav-brand">
          <h2>Mc Laren</h2>
        </div>
        <div>
          <ul className="nav-items">
            <li>
              <a href="#">Racing</a>
            </li>
            <li>
              <a href="#">Automative</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
          </ul>
        </div>
        <div className="toggle-btn">
            <div></div>
            <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
