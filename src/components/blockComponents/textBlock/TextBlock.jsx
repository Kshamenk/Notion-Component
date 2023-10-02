import { forwardRef } from 'react'
import Input from '../../input'

function TextBlock({item, onChange, onKeyDown ,focus},ref) {

function handleOnChange(e){
    onChange(item, e) 
}

function handleOnKeyDown(e){
 onKeyDown(item, e)
}



    return (
    <Input
    border
    ref={focus? ref : null}
     value={item.text}  
     onKeyDown={handleOnKeyDown}
      onChange={handleOnChange}
      ></Input>
      )
}

export default forwardRef(TextBlock);