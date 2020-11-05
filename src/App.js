import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
         <Header />

        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/search" component={() => <SearchPage />}/>          
        </Switch>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
