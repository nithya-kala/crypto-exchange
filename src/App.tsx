import React from "react";
import "./App.css";
import { Exchange } from "./Exchange";
import { ExchangeTable } from "./ExchangeTable";

function App() {
  return (
    <div className="App">
      <Exchange />
      <ExchangeTable />
    </div>
  );
}

export default App;
