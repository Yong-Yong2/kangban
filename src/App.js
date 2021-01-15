import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Product from './pages/Product';
import Register from './pages/Register';
import ServiceCenter from './pages/ServiceCenter';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Switch>
        {/* <Route path="/Login" component={Login} /> */}
        <Route path="/Register" component={Register} />
        <Route path="/MyPage" component={MyPage} />
        <Route path="/ServiceCenter" component={ServiceCenter} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
