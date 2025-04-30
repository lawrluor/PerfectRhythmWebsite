import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <span className="float-left">
        <Link to="/" className="nav-link" id="home">home</Link>
      </span>

      <span className="float-right">
        <Link to="/privacy-policy" className="nav-link" id="privacy-policy">privacy policy</Link>
        <Link to="/terms-and-conditions" className="nav-link" id="terms-and-conditions">terms and conditions</Link>
      </span>
    </nav>
  )
}

export default Nav;