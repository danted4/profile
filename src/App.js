import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container-fluid px-0">
      <Router>
      <Switch>
          <div className={"row no-gutters margin-t-3x full-viewport-height"} style={{ backgroundColor: "#dcdcdc" }}>
            <div className={"col-xs-12 col-md-12 col-lg-12 margin-t-1x"}>
            <Route path='/' component={()=>{return (<Redirect to="/home" />)}}></Route>
            <Route path='/home' component={()=>{return (<h1>Start</h1>)}}></Route>
            </div>
          </div>
        </Switch>
        <div className="row no-gutters footer">
          
        </div>
      </Router>
    </div>
  );
}

export default App;
