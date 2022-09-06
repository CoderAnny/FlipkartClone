import React from 'react';

import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Heading from './Components/Heading';

function App() {
   
  return (
  <>
  <Header/>
            <div className='main-div'>
               <Heading title={"Deals of The Day"}/>
               <Banner/>
         </div>
         
         <div className='main-div'>
            <Heading title={"Discounts for You"}/>
            <Banner/>
          </div>
         
         
         <div className='main-div'>
            <Heading title={"Suggested Items"}/>
            <Banner/>
         </div>
      
         <div className='main-div'>
            <Heading title={"Top Selection"}/>
            <Banner/>
         </div>
      
         <div className='main-div'>
            <Heading title={"Recommended Items"}/>
            <Banner/>
         </div>
  </>
  );
}

export default App;
