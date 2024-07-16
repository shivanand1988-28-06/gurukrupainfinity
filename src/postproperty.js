import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Head from './head';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/userSlice';
import FormData from "form-data" ;
import SwipeableTextMobileStepper from "./imageslider" ;
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { selectProperties } from './slices/propertiesSlice';
import { useDispatch } from 'react-redux';
import { addproperties } from "./slices/propertiesSlice";
import {useEffect } from "react" ;


export default function DialogSelect() {

  const pro = useSelector(selectProperties)
  console.log(pro[0])
    const username = useSelector(selectUser) ;
    
    const [message , setMessage] = React.useState("") ;
  const [open, setOpen] = React.useState(false);
  const [proType, setPro] = React.useState('');
  const [buildingType , setBuilding] = React.useState("") ;
  const [AgeOfPro , setAgeOfPro] = React.useState("") ;
  const [floor ,setFloor] = React.useState("") ;
  const [superBuildup , setSuper] = React.useState("") ;
  const [furnishing,setFurnishing] = React.useState("") ;
  const [street ,setStreet] = React.useState("") ;
  const [location , setLocation] = React.useState("") ;
  const [landmark , setLandmark] = React.useState("") ;
  const [maintainance ,setMain] = React.useState("") ;
  const [rentNego , setRentNego] = React.useState("") ;
  const [depositNego,setDepo] = React.useState("") ;
  const[leaveLiscense,setLeave] = React.useState("") ;
  const [lockinPeriod ,setLockinperiod] = React.useState("") ;
  const [availableFrom, setavailaibleFrom] = React.useState("") ;
  const [totalFloor , setTotalFloor] = React.useState("") ;
  const [city ,setCity] = React.useState("") ;
  const [value , setValue] =  React.useState(dayjs('2022-06-17'));
  const [ideal,setideal] = React.useState("") ;
  const [deposit , setDeposit] = React.useState("") ;
  const [image , setImage] = React.useState("") ;
 const[description , setDescription] = React.useState("") ;
 const [isBroker , setBroker] = React.useState(false) ;
 const [isOwner , setOwner] = React.useState(false) ;
 const [rent , setRent] = React.useState("") ;

console.log(isBroker,isOwner);

const handlechangeBroker = (event) =>{
  setBroker(!isBroker) ;


}
const handlechangeOwner = (event)=>{
  setOwner(!isOwner) ;
 
}
  const handleChangedeposit = (event) => {
    setDeposit(Number(event.target.value) );
  };
  
    const handleChange = (event) => {
    setPro(String(event.target.value) );
  };
  const handleChangebuilding = (event) => {
    setBuilding(String(event.target.value));
  };
  const handleChangeage = (event) => {
    setAgeOfPro(Number(event.target.value));
  };
  const handleChangefloor = (event) => {
    setFloor(Number(event.target.value));
  };
  const handleChangesuperbuild = (event) => {
    setSuper(Number(event.target.value) );
  };
  const handleChangetotalfloor = (event) => {
    setTotalFloor(Number(event.target.value) );
  };
  const handleChangefurnishing = (event) => {
    setFurnishing(String(event.target.value) );
  };
  const  handleChangecity = (event) => {
    setCity(String(event.target.value) );
  };
  const  handleChangelocation = (event) => {
    setLocation(String(event.target.value) );
  };
  const  handleChangestreet = (event) => {
    setStreet(String(event.target.value));
  };
  const  handleChangelandmark = (event) => {
    setLandmark(String(event.target.value) );
  };
    const  handleChangemaintainance = (event) => {
    setMain(String(event.target.value) );
  };
  const  handleChangerentNego = (event) => {
    setRentNego(String(event.target.value));
  };
  const  handleChangedeponego = (event) => {
    setDepo(String(event.target.value));
  } ;
  const  handleChangelockin = (event) => {
    setLockinperiod(String(event.target.value));
  } ;
  const  handleChangeleave = (event) => {
    setLeave(String(event.target.value) );
  } ;

  const  handleChangeideal = (event) => {
    setideal(String(event.target.value));
  } ;

  const handleChangeRent = (event)=>{
    setRent(Number(event.target.value));
  }

  const handleChangeImage = (e) => { 
    console.log(e.target.files) ;
    if (e.target.files) {
      setImage(
     (e.target.files)
      );
   
      }
    }

    const  handleChangedescription = (event) => {
      setDescription(String(event.target.value));
    } ;


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    window.location.reload(false);
  };
 
  const handleSubmit = (event)=>{
      event.preventDefault() ;

     
  const formData = new FormData() ;

  for (const key of Object.keys(image)) {
    formData.append('image', image[key])
}
      
  formData.append(  "propertyType" , proType )   

   formData.append("buildingType" , buildingType )    
   formData.append( "userName" , username )    ;

    formData.append("age_Of_Prperty" , AgeOfPro )    

     formData.append("floor" , floor )        


       formData.append(  "totalFloor" , totalFloor ) ;

 formData.append("super_Buildup_area" ,superBuildup) ;

    formData.append("furnishing" , furnishing )

     formData.append ("city" , city ) 

   formData.append( "location" , location )
     formData.append( "street" , street )
    formData.append(  "landmark" , landmark )

   formData.append( "maintainanceExtra" , maintainance )


    formData.append("rentNegotiable" , rentNego )  ;


  formData.append("leaseDuration" , leaveLiscense) ;

  formData.append(  "lockinPeriod" , lockinPeriod );

         formData.append( "deposit" , deposit );
    formData.append(   "availableFrom" , value );

   formData.append( "idealfor" , ideal) ;
   formData.append("is_broker" , isBroker)   ;
   formData.append("is_owner" , isOwner) ;
   formData.append("rent" , rent)

// if(proType || buildingType || AgeOfPro || floor || totalFloor || superBuildup
//   || furnishing || city || location || street || landmark || maintainance 
//   || rentNego || leaveLiscense || lockinPeriod || deposit  || ideal 
//   || isBroker || isOwner == ""
// ){
//   setMessage("Please Fill All The Fields")
// }
 


     
    
    

 
      
  }

  return (
  
    <>
    
    <Head/>
    {/* <SwipeableTextMobileStepper/> */}
    <div className = "propertyform">

      <button onClick={handleClickOpen} className = "probutton"><span>Add Property Details</span></button>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
      
        <DialogTitle>Please Fill the form</DialogTitle>
       
        <DialogContent>

          <Box component="form" noValidate onSubmit = {handleSubmit} id= "my-awesome-dropzone" sx={{ display: 'flexbox', flexWrap: 'wrap' }}>
          
          <FormControl sx={{ m: 1, minWidth: 320 }}>
              
              
            
              <FormControlLabel
                control={<Checkbox value={isBroker} onChange = {handlechangeBroker}color="primary" />}
                label="Are You A Property Consultant"
              />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 320 }}>
              
              
            
              <FormControlLabel
                control={<Checkbox value={isOwner} onChange = {handlechangeOwner}color="primary" />}
                label="Are You The Ownerr Of The Property"
              />
              </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              
              
              <InputLabel id="demo-dialog-select-label">Property Type</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={proType}
                onChange={handleChange}
                input={<OutlinedInput label="Property Type" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"warehouse"}>warehouse</MenuItem>
                <MenuItem value={"officespace"}>officespace</MenuItem>
                <MenuItem value={"plot"}>plot</MenuItem>
                <MenuItem value={"Ecommerce or sports"}>Ecommerce or sports</MenuItem>
              </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Building Type</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={buildingType}
                onChange={handleChangebuilding}
                input={<OutlinedInput label="Building Type" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"standalone building"}>standalone-building</MenuItem>
                <MenuItem value={"business park"}>business park</MenuItem>
                <MenuItem value={"mall"}>mall</MenuItem>
                <MenuItem value={"independant shop"}>independant shop</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Age Of Property"
                value={AgeOfPro}
                onChange={handleChangeage}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Floor"
                value={floor}
                onChange={handleChangefloor}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Super Build Up In Sqrfeet"
                value={superBuildup}
                onChange={handleChangesuperbuild}
                input={<OutlinedInput label="Building Type" />}
              />
                
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Total Floor"
                value={totalFloor}
                onChange={handleChangetotalfloor}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Rent"
                value={rent}
                onChange={handleChangeRent}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            
            

            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Furnishing</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={furnishing}
                onChange={handleChangefurnishing}
                input={<OutlinedInput label="Building Type" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"on main road"}>YES</MenuItem>
                <MenuItem value={"near by station"}>NO</MenuItem>
                
              
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">City</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={city}
                onChange={handleChangecity}
                input={<OutlinedInput label="Building Type" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>Mumbai</MenuItem>
               
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Location"
                value={location}
                onChange={handleChangelocation}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Street"
                value={street}
                onChange={handleChangestreet}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Landmark"
                value={landmark}
                onChange={handleChangelandmark}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
           

            
           
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Images</InputLabel>
              <input type = "file" name = "files" onChange = {handleChangeImage} multiple></input>
                
               
                
             
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Maintainance Extra</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={maintainance}
                onChange={handleChangemaintainance}
                input={<OutlinedInput label="Building Type" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Deposit"
                value={deposit}
                onChange={handleChangedeposit}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Rent Negotiable</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={rentNego}
                onChange={handleChangerentNego}
                input={<OutlinedInput label="Rent Negotiable" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Deposit Negotiable</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={depositNego}
                onChange={handleChangedeponego}
                input={<OutlinedInput label="Deposit negotiable" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Lockin Period</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={lockinPeriod}
                onChange={handleChangelockin}
                input={<OutlinedInput label="Lockin Period" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Leave and liscense</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={leaveLiscense}
                onChange={handleChangeleave}
                input={<OutlinedInput label="Leave and liscense" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Available From Date" 
                    value = {value} 
                    onChange = {(newValue)=>setValue(newValue)}/>
                      </DemoContainer>
                        </LocalizationProvider>
              
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label">Ideal For</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={ideal}
                onChange={handleChangeideal}
                input={<OutlinedInput label="Ideal For" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Bank"}>Bank</MenuItem>
                <MenuItem value={"Service center"}>Service center</MenuItem>
                <MenuItem value={"Show room"}>Show room</MenuItem>
                <MenuItem value={"ATM"}>ATM</MenuItem>
                <MenuItem value={"Retail"}>Retail</MenuItem>
                
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 320 }}>
              <InputLabel id="demo-dialog-select-label"></InputLabel>
              <TextField
               id="outlined-controlled"
               label="Description"
                value={description}
                onChange={handleChangedescription}
                input={<OutlinedInput label="Building Type" />}
              />
            </FormControl>
           
            

            <Button type = "submit" >Submit The Details</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}