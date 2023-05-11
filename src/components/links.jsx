import styles from "src/styles/components/Links.module.css"

export function Links({items, onReduce}) {
  return (
    <div className={styles.grid}>
      <button onClick={onReduce}>減らす</button>
      {items.map(item => {
        return (
          <a
            key={item.title}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title}
            </h2>
            <p>
              {item.description}
            </p>
          </a>
        )
      })}
    </div>
  );
}
