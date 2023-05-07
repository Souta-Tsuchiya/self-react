import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { CopyRight } from '../components/copy_right'
import { Links } from '../components/links'
import { Headline } from '../components/Headline'
import {} from "../components/Headline"

const inter = Inter({ subsets: ['latin'] })

export function MainCompo(props) {
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
      <Links />
    </main>
  );
}
