import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/styles/components/Main.module.css'
import { CopyRight } from 'src/components/copy_right.jsx'
import { Links } from 'src/components/links.jsx'
import { Headline } from 'src/components/Headline'
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs \u2192",
    description: "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates ⇨",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u2192",
    description: "Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel.",
  },
];

export function MainCompo(props) {
  const [items, setItems] = useState([...ITEMS]);
  const onReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  const {title} = props;
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/{title}.js</code>
        </p>

        <CopyRight />
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Headline
        title={`${title} page`}
        onClick={() => {
          alert("クリック");
        }}
      >
        <code className={styles.code}>pages/{title}.js</code>
      </Headline>
      <Links items={items} onReduce={onReduce}/>
    </main>
  );
}
