import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/App.css';
import MainPage from "../pages/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
