import React from "react";
import Routing from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/context/context";


const App:React.FC =()=> {

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Routing />
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
