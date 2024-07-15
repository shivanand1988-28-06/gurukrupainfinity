import React from "react" ;

import { Button } from "@mui/material";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FormatIndentIncreaseTwoToneIcon from '@mui/icons-material/FormatIndentIncreaseTwoTone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { useSelector} from "react-redux";
import { selectUser } from "./slices/userSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Head (){

  const newUser = useSelector(selectUser) ;
 
  const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

const navigateOne = () =>{
  const path = "/signin" ;
   navigate(path) ;
} 

const navigateTwo = () =>{
  const path = "/postproperty" ;
  navigate(path) ;
}

    return(
        <>
        <div className="head">
            <div className="headlogo">

            </div>
            <div className="dropdown">
                <Button className = "dropbtn" onClick = {event=>window.location.href = "/"}>Home</Button>
            </div>
            <div className="dropdown">
                <Button className = "dropbtn">About Us</Button>
            </div>
            
            <div className="dropdown">
            <Button className="dropbtn"> SERVICES</Button>
               <div className = "dropdown-content">
                <a href = "#">About Us</a>
                <a href = "#">Portfolio</a>
                <a href = "#">Properties</a>
               </div>
        
            </div>
            <div className="dropdown">
                
                <Button className = "dropbtn" onClick = {navigateOne}><AccountCircleTwoToneIcon/>
                    join OR sign-in
                </Button>
            </div>
            <div className="dropdown">
            <Button className = "dropbtn"  ><FormatIndentIncreaseTwoToneIcon/>
                   Post Property Now
                </Button>
            </div>
            
            <div className="dropdown">
            <Button className = "dropbtn"  onClick = {navigateTwo}><SearchTwoToneIcon/>
                  Search-Property Now
                </Button>
            </div>
            <div className="dropdown">
            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="dropbtn"
      ><MenuTwoToneIcon/>
        Menu
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            </div>

        </div>
        </>
    )
}

export default Head ;