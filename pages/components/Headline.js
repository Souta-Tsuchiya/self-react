import styles from "../../styles/components/Headline.module.css"

export function Headline(props) {
  const {title} = props;

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      <button onClick={props.onClick}>ボタン</button>
    </div>
  );
}
