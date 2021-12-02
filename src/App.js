import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useState } from 'react';
import Product from './Components/Product';
import Admin from './pages/admin/Admin';
import OrderDetails from './pages/admin/OrderDetails';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';

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
        <Header />
        <Switch>
          {/* <Route exact path='/' component={() => <Login getDetails={getDetails} />} /> */}
          <Route exact path="/" component={() => <Home authenticated={status} email={email} />} />
          <Route exact path="/login" component={() => <Login getDetails={getDetails} />} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/order/:id" component={OrderDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
