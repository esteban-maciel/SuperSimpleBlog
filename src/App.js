import './App.css';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import Register from './components/Register/Register';
import BlogDetails from './components/BlogDetails/BlogDetails';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home'
import Protected from './components/Protected/Protected';
import Landing from './components/Landing/Landing';

function App() {

  //const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path='/' element={<Landing/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/blogs/:id' element={<BlogDetails/>} />
          <Route path='/*' element={<NotFound/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;