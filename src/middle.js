import React from "react";
import BackGround from "./images/istockphoto-1214716068-1024x1024 1.png"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import {styled} from '@mui/material/styles';
import ButtonBaseDemo from "./buttonbox";
import RecipeReviewCard from "./blogscard";
import { Link } from "react-router-dom";
import MultipleSelectChipthree from "./serchform";

import { useSelector } from "react-redux";
import { selectUser } from "./slices/userSlice";
import {useNavigate} from "react-router-dom" ;

function Middle (){

  const username = useSelector(selectUser) ;
     console.log(username) ;
  const navigate = useNavigate() ;

     function postNavigate (event){

       navigate("/postproperty");

     }

  const theme = createTheme({
    palette: {
      primary: {
        main : "#FFFFFF" ,
       },
     
    },
  }) ;

function postAllpro (){
   navigate('/allproperties')
}
 
 if(username === false){


    return(
      
       <>

      
          <div className="mid" >
          
            <div className="bg">
           
            <div className = "log">
            
            </div>
           <div className = "midbtn">
           <button onClick={postAllpro} className = "midprobtn"><span>Get Property Details</span></button>
           </div>
            <div className="post">
             
          <ThemeProvider theme={theme}>

             <Button  onClick ={postNavigate} variant="contained"  endIcon={<SendIcon /> }>
                 Post Property Now
               </Button>
               </ThemeProvider>
               
   
              
            </div>
            <MultipleSelectChipthree/> 
            </div>
           
            
          </div>  
          {/* <div class= "mid-mid">
                      <ButtonBaseDemo/>
                     </div> */}
          <div class = "bloghead">
                   <Link to = "/blogs-gurukrupainfinity"><h1 class = "heading"> Blogs - Commercial Real Estate Property News & Tips </h1> </Link>
                     </div> 
          
          <div className = "midlast">
              
          <h3 className="midheading">MAKING REALTY DREAMS A REALITY</h3>
          </div>
          <h3 className="title">COMMERCIAL PROPERTIES FOR RENT</h3>
          
          </>
    )}else{
      return(
 <>
  {/* <video autoPlay loop muted className="bgvideo">
              <source src= {city} type = "video/mp4" />

                </video> */}
          <div className="mid" >
          
            <div className="bg">
           
            <div className = "log">
                
            </div>
            <div className = "midbtn">
           <button onClick={postAllpro} className = "midprobtn"><span>Get Property Details</span></button>
           </div>
           
            <div className="post">
             
          <ThemeProvider theme={theme}>

             <Button  onClick = {postNavigate} variant="contained"  endIcon={<SendIcon /> }>
                 Post Property Now
               </Button>
               </ThemeProvider>
               
   
              
            </div>
           <MultipleSelectChipthree/> 
            </div>
           
            
          </div>  
          
          <div className = "bloghead">
                   <Link to = "/blogs-gurukrupainfinity"><h1 className = "heading"> Blogs - Commercial Real Estate Property News & Tips </h1> </Link>
                     </div> 
         
          <div className = "midlast">
               
              <h3 className="midheading">MAKING REALTY DREAMS A REALITY</h3>
          </div>
          <h3 className="title">COMMERCIAL PROPERTIES FOR RENT</h3>

 </>
      )
    }}
  

export default Middle ;