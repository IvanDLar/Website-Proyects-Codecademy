import React from "react";
import "../InsertData/InsertData";
import InsertData from "../InsertData/InsertData";
import "../Tile/Tile";
import { Tile } from "../Tile/Tile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Carrer</th>
              </tr>
            </thead>
            <tbody>
              <Tile />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
