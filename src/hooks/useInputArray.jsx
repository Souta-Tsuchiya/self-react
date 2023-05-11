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

  const onAdd = useCallback(() => {
    setArray((prevArray) => {
      if(prevArray.includes(text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  return {text, array, onChangeText, onAdd};
}
