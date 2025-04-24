import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarDetail from './Components/CarDetail';

function App() {
return(
  <div>
    <Navbar/>
    <Home/>
    <SearchForm />
    <CarDetail/>
    
  </div>
);
}

export default App;
