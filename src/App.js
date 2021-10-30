import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home/Home';
import Login from './pages/login/login/Login';
import PlaceOrder from './pages/place-order/PlaceOrder';
import SignUp from './pages/registration/sign-up/SignUp';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div className="App">

      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}

      {/* <PlaceOrder></PlaceOrder> */}
      <SignUp></SignUp>
    </div>
  );
}

export default App;
