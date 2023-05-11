import { useCallback, useState, useMemo } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

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

  return {count, doubleCount, isShow, onClickBtn, changeShow};
}
