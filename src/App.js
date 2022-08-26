import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddEmployee />} />
      <Route exact path="/edit/:id" component={() => <EditEmployee />} />
    </div>
  );
};
export default App;
