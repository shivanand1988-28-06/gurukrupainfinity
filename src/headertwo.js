import React from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsMailboxFlag } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Typography } from "@mui/material";
import {Button}from "@mui/material";
import {useSelector} from "react-redux" ;
import { selectUser } from './slices/userSlice';
import { useDispatch } from "react-redux" ;
import { logout } from "./slices/userSlice" ;

import {useNavigate} from "react-router-dom" ;


function HeaderTwo (props){
const newuser = useSelector(selectUser) ;
const dispatch = useDispatch();

const logOut = ()=>{
    dispatch(logout()) ;
    console.log("hi from logout");
}

const navigate = useNavigate() ;

const routeChange =()=>{
navigate("/signin") ;
}

const routeChangeOne = ()=>{
  navigate("/signup")
}



   

      if(newuser == false){
    return(
        <div className = "headertwo">
             
              <div className = "mobnumber">
              <MdOutlineWifiCalling3></MdOutlineWifiCalling3> 9594939202
              </div>
              <div className = "info">
                 <BsMailboxFlag></BsMailboxFlag> info@theworthconsultants.com
              </div>
              

             
              <div className = "btnsign">
              <Button onClick ={routeChange} >Sign in</Button>
                            </div>
                          <div className = "spa">
                            <span>OR</span>
                            </div>  
              
              <div className="btnsignup">
              <Button onClick ={ routeChangeOne} >Sign up</Button>
                            </div>

             


        </div>
    )}
    else {
    return(
      <div className = "header">
             
              <div className = "mobnumber">
              <MdOutlineWifiCalling3></MdOutlineWifiCalling3> 9594939202
              </div>
              <div className = "info">
                 <BsMailboxFlag></BsMailboxFlag> info@gurukrupainfinity.com
              </div>
              
              <div >
                <h3 className = "twituser" >HI {newuser}</h3>
               
              </div>
              <div className="twitlogout">
              <Button onClick={logOut}>Log out</Button>
              </div>
              </div>
    )}
}

export default HeaderTwo ;
