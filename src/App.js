import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import {useState} from 'react';
import Product from './Components/Product';

function App() {
  const [email, setEmail] = useState('');
  const [status, SetStatus] = useState(false);
   let getDetails = (details) => {
    SetStatus(true)
    setEmail(details.email)
  }
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={() => <Home authenticated={status} email={email}/>} />
          <Route exact path="/login" component={() => <Login getDetails={getDetails} />} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
