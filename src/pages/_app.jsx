import 'src/styles/globals.css'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgColor } from 'src/hooks/useBgColor'

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />
}
