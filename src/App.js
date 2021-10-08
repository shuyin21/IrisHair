
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Homepage} exact />

        </Switch>
      </Router>

    </>
  );
}

export default App;
