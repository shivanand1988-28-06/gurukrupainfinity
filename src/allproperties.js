import React, { useState } from "react" ;
import { useSelector } from "react-redux";
import { selectProperties } from "./slices/propertiesSlice";
import store from "./store";
import { useEffect } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Head from "./head" ;
import {purple,green,lime} from "@mui/material/colors" ;
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Allproperties (){
   
 
   const [pro,setPro] = useState([]) ;
   const [flag,setFlag] = useState(false) ;

  
    store.subscribe(()=>{
        setPro(store.getState().allProperties.properties) ;
          setFlag(true) ;
         
     });
 


  var refresh = window.localStorage.getItem('refresh');
  console.log(refresh);
  setTimeout(function() {
  if (refresh===null){
      window.location.reload();
      window.localStorage.setItem('refresh', "1");
  }
  }, 1500); // 1500 milliseconds = 1.5 seconds
  
  setTimeout(function() {
  localStorage.removeItem('refresh')
  }, 1700); // 1700 milliseconds = 1.7 seconds



if (flag === true){
  
     console.log(pro[0])
    return(
        <>
        <div className = "allprohead" >
            <Head/>
        </div>
        <div className = "allpro">
       {pro[0].map((dat)=>{
      return(
        <>
        <div>
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={dat.image[0]}
            srcSet={dat.image[0]}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{dat.propertyType}</Typography>
        <Link
          href="#product-card"
          fontWeight="lg"
          color="danger"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
      
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="lg" variant="soft" color="success">
              {dat.super_Buildup_area} Square feet.
            </Chip>
          }
        >
        
        </Typography>
        <Typography level="body-lg">
          ({dat.location})
        </Typography>
      </CardContent>
      <CardOverflow>
        
        <Button variant="outlined" color = "success" size="lg">
          See Owners Details
        </Button>
    
      </CardOverflow>
    </Card>
    </div>
        </>
      )
       })}
      </div>
        </>
    )
}else{
    return(
        <>
        <h1>  ----Property data is loading for this page....</h1>
        </>
    )
}

    
}