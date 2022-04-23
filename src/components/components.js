import { useState } from "react"
import "./component.css"

export const Counter = () =>
{
    const [value , setValue] = useState(0)

    function handlechange(x)
    {
        setValue(value + x)

    }

    function multiply()
    {
        setValue(value *2 )
    }

    function color()
    {
        if(value % 2 == 0)
        {
            return "green"
        }
        else
        {
            return "red"
        }
    }

    return(
        <div>
            <h2 className={ color()}>Value : {value}</h2>
            <div >
                <button onClick={function()
                {
                    handlechange(1)
                }}>Add 1</button>
                <button onClick={function()
                {
                    handlechange(-1)
                }}>Sub 1</button>
            </div>
            <button onClick={function()
            {
                multiply()
            }}>Double</button>
        </div>
    )
     
}