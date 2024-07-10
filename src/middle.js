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
import city from "./images/video1.mp4" ;
import { useSelector } from "react-redux";
import { selectUser } from "./slices/userSlice";


function Middle (){

  const username = useSelector(selectUser) ;
     console.log(username) ;

     function onClick (event){
        event.window.location.href = "/officeproperties"
     }

  const theme = createTheme({
    palette: {
      primary: {
        main : "#FFFFFF" ,
       },
     
    },
  }) ;


 
 if(username === false){
    return(
      
       <>

       <video autoPlay loop muted className="bgvideo">
              <source src= {city} type = "video/mp4" />

                </video>
          <div className="mid" >
          
            <div className="bg">
           
            <div className = "log">
                
            </div>
           
            <div className="post">
             
          <ThemeProvider theme={theme}>

             <Button  onClick ={event =>window.location.href = "/signup"} variant="contained"  endIcon={<SendIcon /> }>
                 Post Property Now
               </Button>
               </ThemeProvider>
               
   
              
            </div>
           <MultipleSelectChipthree/>
            </div>
           
            
          </div>  
          <div class= "mid-mid">
                      <ButtonBaseDemo/>
                     </div>
          <div class = "bloghead">
                   <Link to = "/blogs-gurukrupainfinity"><h1 class = "heading"> Blogs - Commercial Real Estate Property News & Tips </h1> </Link>
                     </div> 
          <div class = "blogs">
            
                     
                  <div  >
                  <Button >
                        <RecipeReviewCard />
                        </Button> 
                     </div>
                    
                     <Button>
                     <div >
                        <RecipeReviewCard/>
                     </div>
                     </Button>
                     <Button>
                     <div>
                        <RecipeReviewCard/>
                     </div>
                     </Button>
                    
          </div>

          
          </>
    )}else{
      return(
 <>
  <video autoPlay loop muted className="bgvideo">
              <source src= {city} type = "video/mp4" />

                </video>
          <div className="mid" >
          
            <div className="bg">
           
            <div className = "log">
                
            </div>
           
            <div className="post">
             
          <ThemeProvider theme={theme}>

             <Button  onClick = {event =>window.location.href = "/postproperty"} variant="contained"  endIcon={<SendIcon /> }>
                 Post Property Now
               </Button>
               </ThemeProvider>
               
   
              
            </div>
           <MultipleSelectChipthree/>
            </div>
           
            
          </div>  
          <div class= "mid-mid">
                      <ButtonBaseDemo/>
                     </div>
          <div class = "bloghead">
                   <Link to = "/blogs-gurukrupainfinity"><h1 class = "heading"> Blogs - Commercial Real Estate Property News & Tips </h1> </Link>
                     </div> 
          <div class = "blogs">
            
                     
                     <div>
                        <RecipeReviewCard/>
                     </div>
                     <div>
                        <RecipeReviewCard/>
                     </div>
                     <div>
                        <RecipeReviewCard/>
                     </div>
                    
          </div>

 </>
      )
    }}
  

export default Middle ;