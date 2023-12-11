import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppRoute from './routes/routes';

class App extends React.Component {
  render (){
    return (
      <div>
        <AppRoute/>
      </div>
    )
  }
}

export default App;