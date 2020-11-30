
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SwipeButtons from './Components/SwipeButtons';

function App() {
  return (
    <div className="App">
    <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/chat">
            <h1>I am the chatpage</h1>
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
