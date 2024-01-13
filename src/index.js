import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/common/Header'
import { Footer } from './components/common/Footer'
import HomePage from './components/pages/homePage'

export function App() {
  return (
    <div className='App'>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
