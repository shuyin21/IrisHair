
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
// import Cookies from 'universal-cookie';



function App() {

  // const cookies = new Cookies();
  // cookies.set(key1, value1, { secure: true, sameSite: 'none' });
  // cookies.set(key2, value2, { secure: true, sameSite: 'none' });

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
