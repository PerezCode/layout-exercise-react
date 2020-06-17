import React from 'react';
import { BrowserRouter, Switch, Link } from "react-router-dom";
import './styles/App.css';
import MainPage from "../pages/MainPage";
import NotFound from "./NotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link exact path="/" component={MainPage}/>
        <Link component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
