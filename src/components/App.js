
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/components/App.css';
import Home from './Home';
import Quiz from './Quiz';

function App() {

 
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} /> 

          <Route exact path="/quiz" component={Quiz} /> 

        </Switch>
      </Router>
    </div>
  );
}

export default App;