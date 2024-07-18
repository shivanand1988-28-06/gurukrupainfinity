import logo from './logo.svg';
import './App.css';
import Header from './header';
import Middle from './middle';
import Blog from './fullblog';
import {BrowserRouter , Router ,Route, Routes} from "react-router-dom" ;
import Home from './Home';
import MultipleSelectChipthree from './serchform';
import SignUp from './signup';
import SignInSide from './signin';
import {useSelector} from "react-redux" ;
import { selectUser } from './slices/userSlice';
import Head from './head';
import { useState } from 'react';
import store from './store';
import { useDispatch } from "react-redux";
import LoggingOut from './logout';
import { addproperties } from './slices/propertiesSlice';
import { selectProperties } from './slices/propertiesSlice';
import PostProperty from './postproperty';
import { useEffect } from 'react';
import Allproperties from './allproperties';
import ProductCard from './propertymodal';
import { HashRouter } from 'react-router-dom';
import AllpropertiesData from './allpropertydata';


function App() {
 
  const newuser = useSelector(selectUser);
  
   ;
   console.log(newuser) ;


  const [userName , setuserName] = useState({}) ;
  const [userEmail,setUserEmail] = useState({}) ;



  function handleCallback  (data) {
        setuserName(data) ;
       
      }

      const prodata = useSelector(selectProperties) ;
  
      const dispatch = useDispatch();

      const requestOptions = {
   
           method: 'POST',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({search : ""}) 
         }; 
   
   
      function fetchData() {
           fetch("http://localhost:3003/properties/getAllproperties" , requestOptions).then(response=>{
                  
                  if (!response.ok) {
                   throw new Error('Network response was not ok');
                 }
                 // Parse the JSON response
                 return response.json();
                 
   
                
           }
           
       ).then(data=>{
          
             console.log(data.data[0].result) ;
            dispatch(addproperties(data.data[0].result)) ;
            
      
       })
      
   }
   
   
      useEffect(()=>
     {
       fetchData()
     },[]) ;
   
     
     
 
 
  return (
    <>
  
    {/* <Blog/> */}
     <HashRouter>
      <Routes>
        <Route path = "/propertymodal" element = {<ProductCard />}/>
        <Route path = "/postproperty" element = {<PostProperty/>} />
        <Route path = "/allproperties" element = {<Allproperties />} />
        <Route path = "/header" element = {<Header newuser = {newuser}/>} />
        <Route path = "/blogs-gurukrupainfinity" element = {<Blog/>}/>
        <Route path = "/" element = {<Home/>} />
        <Route path= "/signup" element = {<SignUp parentCallback = {handleCallback} />}/>
        <Route path = "/signin" element = {<SignInSide parentCallback = {handleCallback} />} />
        <Route path = "/loggingout" element = {<LoggingOut/>} />
        <Route path = "/allpropertydata" element ={<AllpropertiesData/>}/>
      </Routes>
  </HashRouter>
  

   </>
   
  )
}

export default App;
