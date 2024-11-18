import styles from './about.module.css'
import Image from 'next/image';
const technologies = [
  { name: '.Net', imgSrc: 'dotnet.webp' },
  { name: 'SQL', imgSrc: 'sql.png' },
  { name: 'HTML', imgSrc: 'html.png' },
  { name: 'Blazor', imgSrc: 'Blazor.png' },
  { name: 'React', imgSrc: 'react.png' },
  { name: 'Javascript', imgSrc: 'js.png' },
  { name: 'CSS', imgSrc: 'css.png' },
  { name: 'GIT', imgSrc: 'git.png' },
  { name: 'Next.js', imgSrc: 'nextjs.png' },
  { name: 'Node.js', imgSrc: 'node.png' },
  { name: 'DevOps', imgSrc: 'DevOps.png' },
  { name: 'Terraform', imgSrc: 'Terraform.png' },
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Experienced Technologist</h1>
        <p className={styles.desc}>
          I excel at working independently with minimal guidance, taking projects from initial concept all the way to production. Whether being in a team or working solo, I am committed to delivering exceptional outcomes that sets the business up for success. Proven ability to overcome any obstacle and deliver solutions. Adept at handling complex challenges with clarity and efficiency, avoiding unnecessary complexity.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>17+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>4</h1>
            <p>Multinational Corporations</p>
          </div>
          <div className={styles.box}>
            <h1>1</h1>
            <p>Employee of the Year</p>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.skills__item}>
            <Image src={tech.imgSrc} alt={tech.name} width={48} height={48} />
            <div className={styles.skills__item}>{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
