import { useRef, useState } from "react";
import TextBlockView from "../blockComponents/textBlock/TextBlockView";
import Button from "../button";
import ToDoBlockView from "../blockComponents/todoBlock/ToDoBlockView";
import TableBlockView from "../blockComponents/tableBlock/TableBlockView";
export default function BlockView() {
  const ref = useRef(null);

  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("text"); //table, todo
  const [properties, setProperties] = useState(["id", "text", "completed"]);

  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      text: "Hola a todos",
      completed: false,
    },
  ]);

  function handleChange(item) {
    const { type, text, id } = item;

    if (type === "text") {
      const temp = [...data];
      const editItem = temp.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text;
        setData(temp);
      }
    }

    if (type === "todo") {
      const temp = [...data];
      const editItem = temp.find((i) => i.id === id);
      if (editItem) {
        editItem.text = text ?? editItem.text;
        editItem.completed = item.completed ?? editItem.completed;
        setData(temp);
      }
    }

    if (type === "table") {
        const temp = [...data];
        const editItem = temp.find((i) => i.id === id);
        if (editItem) {
          editItem = item.updatedItem
          setData(temp);
        }
      }
  }

  function handleOnCreate() {
    const newItem = {
      id: crypto.randomUUID(),
      text: "hola",
      completed: false,
    };

    properties.forEach((prop) => {
      if (!newItem.hasOwnProperty(prop)) {
        newItem[prop] = "";
      }
    });

    const temp = [...data, newItem];
    setData(temp);
    setCurrentItem(newItem);
  }

  function handleNewColumn(name) {
    updateProperties(name);
  }
  function updateProperties(name) {
    const newProperties = [...properties, name];

    const temp = [...data];

    for (let i = 0; i < temp.length; i++) {
      const item = temp[i];
      for (let j = 0; j < newProperties.length; j++) {
        const prop = newProperties[j];
        if (item.hasOwnProperty(prop)) {
          console.log("Ya existe la propiedad", prop);
        } else {
          item[prop] = "test";
        }
      }
    }
    setProperties(newProperties);
    setData(temp);
  }

  function TypesSelector() {
    return (
      <div>
        <button>...</button>
        <div>
          <button onClick={() => setType("text")}>Text</button>
          <button onClick={() => setType("todo")}>ToDo</button>
          <button onClick={() => setType("table")}>Table</button>
        </div>
      </div>
    );
  }

  if (type === "todo") {
    return (
      <div>
        <TypesSelector />
        <ToDoBlockView
          ref={ref}
          focusId={currentItem?.id}
          data={data}
          onChange={handleChange}
          onCreate={handleOnCreate}
        />
      </div>
    );
  }

  if (type === "table") {
    return (
      <div>
        <TypesSelector />
        <TableBlockView
          ref={ref}
          focusId={currentItem?.id}
          data={data}
          columns={properties}
          onChange={handleChange}
          onCreate={handleOnCreate}
          onCreateNewColumn={handleNewColumn}
        />
      </div>
    );
  }

  //componente de texto por defecto
  return (
    <div>
      <TypesSelector />
      <TextBlockView
        ref={ref}
        focusId={currentItem?.id}
        data={data}
        onChange={handleChange}
        onCreate={handleOnCreate}
      />
    </div>
  );
}
