import Link from "next/link";
import styles from "src/styles/components/Header.module.css";

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"},
];

export function Header() {
  return (
    <header className={styles.Header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <p className={styles.space}>{item.label}</p>
          </Link>
        );
      })}
    </header>
  );
}
