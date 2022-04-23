import "./App.css";
import { Counter } from "./components/components";
// import { Inventory } from "./components/inventory";

function App() {
  return (
    <div className="App">
      {/* <Inventory /> */}
      <Counter></Counter>
    </div>
  );
}

export default App;

 // var navbar = 
  // [
  //   {
  //     image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  //     name : "Top offers",
  //   },
  //   {
  //     image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  //     name : "Top offers",
  //   },
  //   {
  //     image : "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  //     name : "Top offers",
  //   },
  // ]

  // <h2>Counter : {counter}</h2>
  // <button onClick={ () => handlechange(1)}>Button1</button>
  // <button onClick={ () => handlechange(-1)}>Button2</button>
  // <div>Number is {counter %2 === 0 ? "Even" : "Odd"}</div>

  // const [counter , setCounter] = useState(0)

  // const handleaAdd = () =>
  // {
  //   setCounter(counter+1)
  // }

  // const handleSub = () =>
  // {
  //   setCounter(counter - 1)
  // }

  // const handlechange = (value) =>
  // {
  //   setCounter(counter + value)
  // }