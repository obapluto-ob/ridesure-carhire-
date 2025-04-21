import React from 'react';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarList from './components/CarList';


function App() {
return(
  <div>
    <Navbar/>
    <Home/>
    <SearchForm />
    <CarList />
  </div>
);
}

export default App;
