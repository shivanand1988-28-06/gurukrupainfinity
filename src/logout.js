import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux" ;
import { logout } from "./slices/userSlice" ;



export default function LoggingOut (){
    const dispatch = useDispatch();

    const logOut = ()=>{
        dispatch(logout()) ;
        console.log("hi from logout");
    }
    return(
        <>
        <Button onClick={logOut}>Logout</Button>
        </>
    


    )
       
}