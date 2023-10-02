import { useEffect, useRef, useState } from "react";
import Input from "../../input";

export default function Cell({ text, onChange, canBeEdited }) {
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(text);

  const ref = useRef(null);

  useEffect(() => {
    setValue(text);
  }, [text]);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [editable]);

  function handleOnDoubleClick() {
    setEditable(true);
    //ref.current.focus();
  }

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  function handleOnBlur(e) {
    
    onChange(e.target.value);
    setEditable(false);
  }
  function handleOnKeyDown(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  return editable && canBeEdited ? (
    <td>
      <Input
        ref={ref}
        onChange={handleOnChange}
        value={value}
        onBlur={handleOnBlur}
        onKeyDown={handleOnKeyDown}
      ></Input>
    </td>
  ) : (
    <td onDoubleClick={handleOnDoubleClick} key={crypto.randomUUID()}>
      {value}
    </td>
  );
}
