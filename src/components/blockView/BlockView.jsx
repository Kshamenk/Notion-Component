import { useRef, useState } from "react";
import TextBlockView from "../blockComponents/textBlock/TextBlockView";
import Button from '../button'
import ToDoBlockView from "../blockComponents/todoBlock/ToDoBlockView";
export default function BlockView() {

    const ref = useRef(null)

    const [currentItem, setCurrentItem] = useState(null)
    const [type,  setType] = useState('text') //table, todo
    const [properties, setProperties] = useState(['id', 'text', 'completed'])    

    const [data, setData] = useState([
        {
        id: crypto.randomUUID(),
        text: 'Hola a todos',
        completed: false,
    },
])

function handleChange(item){
    const { type, text, id, completed} = item
    if(type === 'text'){
        const temp = [...data]
        const editItem = temp.find((i) => i.id === id)
        if (editItem) {
            editItem.text = text
            setData(temp)
        }
    }
}

function handleOnCreate(){
    const newItem = {
        id: crypto.randomUUID(),
        text: 'hola',
        completed: false
    };

    properties.forEach((prop) => {
        if (!newItem.hasOwnProperty(prop)) {
            newItem[prop] = ''
        }
    })

    const temp = [...data, newItem]
    setData(temp)
    setCurrentItem(newItem);
}
function TypesSelector(){
    return (<div>
        <button>...</button>
        <div>
            <button onClick={()=> setType('text')}>Text</button>
            <button onClick={()=> setType('todo')}>ToDo</button>
            <button onClick={()=> setType('table')}>Table</button>
        </div>
    </div>)
}

if(type === 'todo'){
    return (<div>
        <TypesSelector/>
        <ToDoBlockView
        ref={ref} 
        focusId={currentItem?.id}
        data={data} 
        onChange={handleChange}  
        onCreate={handleOnCreate}/>
    </div>)
}

    //componente de texto por defecto
    return (
    <div>
        <TypesSelector/>
        <TextBlockView 
        ref={ref} 
        focusId={currentItem?.id}
        data={data} 
        onChange={handleChange}  
        onCreate={handleOnCreate}/>
    </div>)
}