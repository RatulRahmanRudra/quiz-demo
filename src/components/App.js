
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/components/App.css';
import Home from './Home';
import Quiz from './Quiz';

function App() {

 
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/"> 
            <Home/>
          </Route>

          <Route exact path="/quiz"> 
            <Quiz/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;