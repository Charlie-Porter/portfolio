import Image from "next/image";
import styles from './contact.module.css';

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Let&apos;s connect ✉️</h1>
        <p>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I&apos;d love to hear from you 📣</p>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

