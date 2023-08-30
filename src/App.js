import './App.css';
import Toolbar from "./components/Toobar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState,} from "react";
import {useSelector} from "react-redux";

function App() {
  const user = useSelector(state =>state.user)
  const myColors =useSelector(state => state.colors)
  console.log(myColors)
  return (
      <div>

      </div>
  );
}

export default App;
