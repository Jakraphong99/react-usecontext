import React, { useState, useCallback, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
import User from "./components/User";
import Age from "./components/Age";

export const AppContext = createContext(null);
function App() {
  const [username, setUsername] = useState("")
  const [userage, setUserage] = useState("")
  return (
    <div className="App">

      <AppContext.Provider value={{ username, setUsername, userage, setUserage }}>
        <Login />
        <Age />
        <User />
      </AppContext.Provider>
    </div>
  );
}
export default App;