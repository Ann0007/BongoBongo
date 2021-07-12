import React from "react";
// import { InputForm } from "./components/InputForm";
import  Students  from "./components/Students";
function App() {
  // const [board, setboard] = useState([]);
  // const updateboardArray = eachEntry => {
  //   setboard([...board, eachEntry]);
  // };

  return (
    <div className="container mt-4">
      {/* <InputForm updateboardArray={updateboardArray} />
      <Outputboard board={board} /> */}
         <Students />
    </div>
  );
}
export default App;