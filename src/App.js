import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './Screens/Cart';

function App() {
  return (
    <CartProvider>

    <Router>

      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/login' element={<Login/>}/>
          <Route path='/createuser' element={<Signup/>}/>
        </Routes>

      </div>

    </Router>
    </CartProvider>

  );
}

export default App;
