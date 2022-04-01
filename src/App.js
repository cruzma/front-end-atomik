import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Paginas
import HomePage from './pages/Homepage/HomePage'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articulo' element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
