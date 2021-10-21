import '../App.css';
import Controller from './Controller';
import Display from './Display';
import Engine from './Engine';
import Game from './Game';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">
      <p>change</p>
      <div classname="App-controllers">
      <Switch>
        <Route>
          <Controller/> 
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Display/>
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Engine/>
        </Route>
      </Switch>
      <Switch>
        <Route>
          <Game/>
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
