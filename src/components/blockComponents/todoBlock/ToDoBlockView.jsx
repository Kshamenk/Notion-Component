import ToDoBlock from "./ToDoBlock";
import React,{ forwardRef, useEffect } from 'react';
 function ToDoBlockView({data, onChange, onCreate,focusId}, ref) {
    useEffect(()=>{
        if(focusId){
            ref.current.focus()
        }
    },[focusId])

function handleOnChange(item,e){}

function handleOnKeyDown(item, e){}


return data.map((item)=>(
    <ToDoBlock 
    ref= {ref}
    key={item.id}  
    item={item} 
    focus= {focusId === item.id}
    onChange={handleOnChange}
    onKeyDown={handleOnKeyDown}
    />
    ))
}

export default forwardRef(ToDoBlockView)

