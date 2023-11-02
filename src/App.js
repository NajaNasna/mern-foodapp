import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/login' element={<Login/>}/>
        </Routes>

      </div>

    </Router>

  );
}

export default App;
