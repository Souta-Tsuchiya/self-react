import styles from "../../styles/Home.module.css";

export function Headline(props) {
  console.log(props);
  const {title} = props;

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </div>
  );
}
