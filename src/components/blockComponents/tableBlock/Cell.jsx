import { useEffect, useRef, useState } from "react";
import Input from "../../input";

export default function Cell({ text ,onChange}) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(text);

  const ref = useRef(null)

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(()=>{
    if (ref.current) {
        ref.current.focus()
    }
  },[editable])


  function handleOnDoubleClick(){
      setEditable(true)
      
  }


  function handleOnChange(e){
    setValue(e.target.value)
  }

  function handleOnBlur(){
    onChange()
    setEditable(false)
  }



  return editable ? (
    <td>
      <Input ref={ref} onChange={handleOnChange} value={value} onBlur={handleOnBlur}></Input>
    </td>
  ) : (
    <td onDoubleClick={handleOnDoubleClick} key={crypto.randomUUID()}>{text}</td>
  );
}
