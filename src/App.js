import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import ItemList from './components/ItemList/ItemList';



class App extends Component {
  render() {
    return (
      <div>
       
        <Header /> 
        <h2 className="text-center">React.JS</h2>
        <Button />

        <ItemList />


        
        
      </div>
  
    )
  }
}

export default App;