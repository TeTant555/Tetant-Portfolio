import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Pages/Nav';

const App = () => {
  return ( 
    <>
    <Layout />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);