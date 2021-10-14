
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Appointments from './Pages/Appointments';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/appointments' component={Appointments} exact />

        </Switch>
      </Router>

    </>
  );
}

export default App;
