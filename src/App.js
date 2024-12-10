import './App.css'
import Home from './components/Home'
import Counter from './components/Counter'

function App() {
  const carInfo ={name: "Ford", model: "Mustang", year: 1964}
  const array = [1, 2, 3, 4, 5]
  const passing_it ="Passed from App.js"
  return (
    <>
    <Home car={carInfo} bike = 'Hero' a = {array} passed ={passing_it}/>
    </>
  );
}

export default App;

// const x = 78
// let text = "Goodbye"
// if (x < 10) {
//   text = "Hello"
// }
// const myElement = <h1>{text}</h1>
// var a = 69
// This is the JSX syntax for returning HTML elements
// <>
// {/* <First></First>, although we used the below instead */}
//   <h1 class="App">Hello from the file "App.js"</h1>
//   <h1 class="App">Hello the value of a is {a}</h1>
//   {console.log("Hello from the console")}
// </>