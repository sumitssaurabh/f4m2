import logo from './logo.svg';
import './App.css';



function App() {

  let flname = "sumit";
  // const date = new Date().toLocaleDateString();
  // let hr = new Date().toLocaleTimeString();
  let ctime  = new Date();
  ctime = ctime.getHours();
  // let greeting = " ";

  return (
   <>
    <h1>
      my name is {flname} 
      </h1>
      <hr />
      <p>
        {/* today Date is = {date} */}
        <br />
        <hr />
        {/* today time is = {hr}  */}

      </p>
    <hr />
   <p>



      my random  no is{Math.random()}
    </p>

<hr />
   <p contentEditable ="true">hello I am editbale </p> 

<hr />
 <h1>hello Sir {ctime} </h1>


i</>
 
  );
}

export default App;
