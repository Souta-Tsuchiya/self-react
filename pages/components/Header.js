import Link from "next/link";
import styles from "../../styles/components/Header.module.css";

export function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <p className={styles.space}>Index</p>
      </Link>
      <Link href="/about">
        <p className={styles.space}>About</p>
      </Link>
    </header>
  );
}
