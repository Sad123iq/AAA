import { useState } from "react";
import "./App.css";
import MainContext from "./context/context";
import ROUTES from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const contextData = { data, setData };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={ROUTES}></RouterProvider>
    </MainContext.Provider>
  );
}

export default App;
