import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const onClickBtn = useCallback((e) => {
    if(count < 10) {
      setCount((count) => count + 1);
    }
    console.log(count);
  }, [count]);

  const [isShow, setIsShow] = useState(false);
  const changeShow = useCallback(() => {
    setIsShow((isShow) => {
      return !isShow
    })
  }, []);

  return {count, isShow, onClickBtn, changeShow};
}
