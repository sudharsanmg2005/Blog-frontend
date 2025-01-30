import { Link } from "react-router";
import logo from "../assets/blog3.jpg";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/about" style={styles.navLink}>
          About
        </Link>
        <Link to="/contact" style={styles.navLink}>
          Contact
        </Link>
        <Link to="/newregister" style={styles.navLink}>
          Register
  
        </Link>
        <Link to ="/login" style={styles.navLink}>
          LogIn
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", 
    margin: 0,
    padding: "20px 50px",
    borderBottom: "4px solid rgb(58, 59, 58)",  
    backgroundColor: "#ffffff",  
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center", 
  },
  logo: {
    height: "80px", 
  },
  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center", 
  },
  navLink: {
    textDecoration: "none",
    color: "#333",  
    fontSize: "1.1em",
    fontWeight: "600",
    transition: "color 0.3s, transform 0.3s",
  },
  navLinkHover: {
    color: "#4caf50",  
    transform: "scale(1.1)", 
  }
};

export default Header;
