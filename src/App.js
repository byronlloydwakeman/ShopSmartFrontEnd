import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './pages/Home';
import { ShoppingList } from './pages/ShoppingList';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="flex-column">
        {/* <NavigationBar/> */}
        <div style={{ height: "100vh" }}>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/shoppinglist" element={<ShoppingList />} />
          </Routes>
        </div>
        <ToastContainer /> {/* Add the ToastContainer component */}
      </div>
    );
  }
}

export default App;
