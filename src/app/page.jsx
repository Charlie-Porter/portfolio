import styles from './home.module.css'
import Image from 'next/image';
import { prefix } from './utils/prefix';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I&apos;m <b>Charlie</b>
          <span className={styles.profileImage}>
            <Image src={`${prefix}/about.png`}
              alt="Profile Picture"
              width={200} height={200}
              unoptimized={true}
            />
          </span>
        </h1>
        <p className={styles.desc}>
          I&apos;m an full stack software developer from Northern Ireland. Highly flexible and self-sufficient. Able to overcome any obstacle. 🐙
        </p>
        <div className={styles.buttons}>
          <a className={styles.button} href="https://github.com/Charlie-Porter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.02-2.7-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0 1 12 6.8c.85.004 1.71.11 2.5.32 1.9-1.29 2.74-1.02 2.74-1.02.54 1.38.2 2.4.1 2.65.63.71 1.02 1.61 1.02 2.7 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.17.58.68.48A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
            GitHub
          </a>

          <a className={styles.button} href="https://www.linkedin.com/in/cp-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ marginRight: '4px' }}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.271c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.271h-3v-5.604c0-1.337-.026-3.063-1.871-3.063-1.873 0-2.159 1.462-2.159 2.973v5.694h-3v-10h2.881v1.367h.041c.401-.756 1.379-1.555 2.841-1.555 3.038 0 3.601 2 3.601 4.605v5.583z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div >
  );
};

export default Home;
