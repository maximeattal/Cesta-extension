/* global chrome */

import logo from './logo.svg';
import './App.css';
import Panier from './components/Panier';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Panier />
      <Footer />
      </div>
  );
}

export default App;
