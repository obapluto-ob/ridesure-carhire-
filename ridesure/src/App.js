import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import CarDetail from './Components/CarDetail';
import BookingForm from './Components/BookingForm';


function App() {
return(
  <div>
    <Navbar/>
    <Home/>
    <SearchForm />
    <CarDetail/>
    <BookingForm
  car={{ name: "Toyota Corolla" }}
  onSubmit={(data) => console.log("Booking submitted:", data)}
/>

  </div>
);
}

export default App;
