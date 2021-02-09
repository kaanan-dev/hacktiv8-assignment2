import logo from './logo.svg';
import './App.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePortfolio from './pages/HomePortofolio/HomePortofolio';


const App = () => {

  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path='/' component={ HomePortfolio }></Route>

        </Switch>

      </Suspense>
    </Router>
  )
};
export default App;
