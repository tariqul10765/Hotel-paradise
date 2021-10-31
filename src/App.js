import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/add-service/AddService';
import Home from './pages/home/home/Home';
import Login from './pages/login/login/Login';
import ManageOrders from './pages/manage-all-orders/ManageOrders';
import MyOrders from './pages/my-orders/my-orders/MyOrders';
import PlaceOrder from './pages/place-order/PlaceOrder';
import SignUp from './pages/registration/sign-up/SignUp';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';
import PrivateRoute from './pages/shared/private-route/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <SignUp></SignUp>
            </Route>

            {/* private routes */}
            <PrivateRoute path='/order/:roomId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/my-orders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manage-orders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/add-service'>
              <AddService></AddService>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
