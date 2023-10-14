import styles from "../assets/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="/">
          <img src="../logo/INSGaruda.jpg" alt="Left Logo" />
        </a>
        <a href="/admin-login" className={styles.adminButton}>
          Admin Login
        </a>
      </div>
      <div className={styles.right}>
        <a href="/">
          <img src="./logo/INS.jpg" alt="Right Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
