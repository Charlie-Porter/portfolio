import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Charlie Porter</div>
      <div className={styles.text}>
        Charlie Porter © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
