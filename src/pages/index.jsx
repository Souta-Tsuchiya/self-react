import Head from 'next/head'
import { Inter } from 'next/font/google'
import { MainCompo } from 'src/components/main.jsx'
import { Header } from 'src/components/Header.jsx'
import { useCallback, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

let num = 1;
export default function Home() {
  const [foo, setFoo] = useState(num);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("foo");
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [foo]);

  const [count, setCount] = useState(0);
  const onClickBtn = useCallback((e) => {
    if(count < 10) {
      setCount((count) => count + 1);
    }
    console.log(count);
  }, [count]);

  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にして下さい");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const [isShow, setIsShow] = useState(false);
  const changeShow = useCallback(() => {
    setIsShow((isShow) => {
      return !isShow
    })
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={() => {
        hadleClick();
        setFoo(num);
      }}>ボタン</button>
      <button onClick={onClickBtn}>ボタン2</button>
      <button onClick={changeShow}>
        {isShow ? "非表示": "表示"}
      </button>
      {
        isShow ? <h1>{count}</h1>: null
      }
      <input type='text' value={text} onChange={onChangeText}></input>
      <MainCompo title="Index"/>
    </div>
  )
}

const hadleClick = (e) => {
  // e.preventDefault();
  // console.log(e.target.href);
  num++;
  console.log(num);
}
