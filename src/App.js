import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading]= useState(true);
  const [tours,setTours]=useState([]);

  //now we will remove tour according to the mind of user
  function removeTour(id){
   const newTours = tours.filter( (tour)=>{
     return id !== tour.id;
   })
   setTours(newTours);
  }

  const fetchTours = async () => {
   setLoading(true);

   try{
   const response = await fetch(url);
   const tours = await response.json();
   console.log(tours);
   setLoading(false);
   setTours(tours);
   }
   catch (error){
   setLoading(false);
   console.log(error);
   }
   console.log(tours);
  }
  useEffect( () =>{
    fetchTours();
  },[])

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0){
    return <main>
    <div className='title'>
    <h2>No Tours Left</h2>
    {/* now here we hav to call the fetch api function
    to again set the tours to be normal */}
    <button className='btn' onClick={fetchTours}>Reset</button>
    </div>
    </main>
  }
  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  );
}

export default App
