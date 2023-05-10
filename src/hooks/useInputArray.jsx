import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    if(e.target.value.length > 5) {
      alert("5文字以内にして下さい");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const [array, setArray] = useState([]);
  const [counter, setCounter] = useState(1);
  const onAdd = useCallback(() => {
    setArray((prevArray) => {
      const newArray = [...prevArray, counter];
      setCounter(counter+1);
      return newArray;
    });
  }, [array, counter]);

  return {text, array, onChangeText, onAdd};
}
