import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>dev soulja</div>
      <div className={styles.text}>
        dev soulja © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
