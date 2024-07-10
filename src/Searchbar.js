import React from "react";
import SplitButton from "./dropdown";
import Markdown from "./Markdown";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import UnstyledSelectIntroduction from "./dropdown";
import MenuIntroduction from "./dropdowntwo";
import UnstyledButtonCustom from "./searchbutton";
import UnstyledInputIntroduction from "./input" ;
import MultipleSelectCheckmarks from "./dropdown";
import MultipleSelectChip from "./dropdown";
import MultipleSelectChiptwo from "./dropdowntwo";

 
function SearchBar (props ){
const [area , setArea] = React.useState("") ;
let value ;

const handleChange=(event)=>{
    setArea(event.target.value) ;
    console.log(area) ;
}

    function InputAdornments() {
        const [showPassword, setShowPassword] = React.useState(false);
  
        const handleClickShowPassword = () => setShowPassword((show) => !show);
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
         
        };
   
    }
  
  
    return (
        <div >
        
          <div><MultipleSelectChip /></div>
        <div><MultipleSelectChiptwo /></div>
        <div>
      
        <TextField
          label="Area Of The Property"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Sq.Feet</InputAdornment>,
          }}
          onChange={ handleChange}
        />
            </div>    
            <div className = "searchbutton"><UnstyledButtonCustom/></div> 
        </div>
        
    )
  
}

export default SearchBar ;