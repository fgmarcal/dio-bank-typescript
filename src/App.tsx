import React from "react";
import Routing from "./routes/routes";
import { BrowserRouter } from "react-router-dom";


const App:React.FC =()=> {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
