import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.

    const [books , setBooks] = useState(10)
    const [notebook , setNotebook] = useState(13)


    function handlechange(value)
    {
        if(books == 0 && value == -1)
        {
            return
        }

        setBooks(books + value)   
    }

    function hnotebook(value)
    {
        if(notebook == 0 && value == -1)
        {
            return
        }

        setNotebook(notebook + value)   
    }

    const total = books + notebook + inv.pens


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={ function()
        {
            handlechange(1)
        }}>+</button>
        <button className="circlularButton" onClick={ () => 
        (
            handlechange(-1)
        )}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={function()
        {
            hnotebook(1)
        }}>+</button>
        <button className="circlularButton" onClick={function()
        {
            hnotebook(-1)
        }}>-</button>
        <span>{notebook}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};