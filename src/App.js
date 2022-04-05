import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ToDo from './components/ToDos/ToDo';
import Categories from './components/Categories/Categories';
import Bootstrap from './components/Bootstrap/Bootstrap';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='todos' element={<ToDo/>}/>
          <Route path='categories' element={<Categories/>}/>
          <Route path='bootstrap' element={<Bootstrap/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
