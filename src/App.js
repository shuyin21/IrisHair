import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import { styled, StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "./styling/index";
import isPropValid from "@emotion/is-prop-valid";
// import Cookies from 'universal-cookie';

function App() {
  // const cookies = new Cookies();
  // cookies.set(key1, value1, { secure: true, sameSite: 'none' });
  // cookies.set(key2, value2, { secure: true, sameSite: 'none' });

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Router>
          <Switch>
            <Route path="/" component={Homepage} exact />
          </Switch>
        </Router>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default App;
