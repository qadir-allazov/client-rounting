import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../src/components/About'
import Profil from './components/Profil';
import Jobs from './components/Jobs';
import ErrorPage from './components/ErrorPage';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="jobs">Jobs</Link>
        </nav>
        <Routes>
          <Route path='/' element={this} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profil />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
