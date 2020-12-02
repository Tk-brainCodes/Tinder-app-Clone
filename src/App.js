
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SwipeButtons from './Components/SwipeButtons';
import Chat from './Components/UserChat';
import ChatScreen from './Components/ChatScreen';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/chat">
            {/*Back Button Prop*/}
            <Header backButton="/" />
            <Chat />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
