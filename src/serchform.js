import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import Search from '@mui/icons-material/Search';
import UnstyledInputIntroduction from './input';
import Slider from '@mui/material/Slider';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
 'Office-Spaces' ,
 'Warehouse' ,
 'Sports Or E-Commerce' ,
 'Plots'
];

const proNames = [
    'Andheri' ,
    'Bandra' 
] ;

const rentOptions = [
  "Less Than 50,000" ,
  "More Than 50,000" ,
  "between 70,000 to 1 lac" ,
  "between 1 lac to 1 lacs 30,000" ,
  "less than 2 lac" ,
  "2 lacs" ,
  "more than 2 lacs"
] 





function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
} 
function getStylesTwo(proname, property, theme) {
    return {
      fontWeight:
        property.indexOf(property) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  const Input = React.forwardRef(function CustomInput(props, ref) {
    return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
   
  });




export default function MultipleSelectChipthree(props) {
  const theme = useTheme();
  const [proType, setProtype] = React.useState([]);
   const [locations ,setLocations] = React.useState([]) ;
const [data , setData] = React.useState({catagory : [] , locations : [] , rent : []});
  const [rent , setRent] = React.useState([]);

   const handleChange = (e,renderValue) => { 

    // const {
    //   target: { value },
    // } = event;
    // setProtype(
    //   // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // );
    const name = e.target.name ;
    const value = e.target.value ;
    setData(values =>({...values , [name] : value}))
    
  };

  const handleSubmit =(e)=>{
       e.preventDefault() ;
       
         console.log(data) ;
         

  }
  
  const handleChangeTwo = (event,renderValue) => {
    const {
      target: { value },
    } = event;
    setLocations(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

 

  };

  function valuetext(value) {
    return `${value}Rs`;
  }

  const handleChangeThree = (e)=>{
    const {
      target: { value },
    } = e;
    setRent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  return (
   <form onSubmit = {handleSubmit}>
    <div className = "search">
    <div>  <FormControl sx={{ m: 1, width: 300 }} >
    <InputLabel id="demo-multiple-chip-label"><ApartmentOutlinedIcon/>Property Type..</InputLabel>
        <Select
          name = "catagory" 
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={data.catagory}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, proType, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>

        
      
      </FormControl></div>
       <div><FormControl sx={{ m: 1, width: 300 }} >
       <InputLabel id="demo-multiple-chip-label-two"><LocationOnIcon/>Locations...</InputLabel>
        <Select
          name = "locations"
          labelId="demo-multiple-chip-label-two"
          id="demo-multiple-chip-two"
          multiple
          value={data.locations}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {proNames.map((proname) => (
            <MenuItem
              key={proname}
              value={proname}
              style={getStylesTwo(proname, locations, theme)}
            >
              {proname}
            </MenuItem>
          ))}
        </Select>
       
      
          
        </FormControl> </div> 
        <div><FormControl sx={{ m: 1, width: 300 }} >
         <InputLabel id="demo-multiple-chip-label-two"><CurrencyRupeeIcon/>RENT..</InputLabel>
        <Select
          name = "rent" 
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={data.rent}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} variant='outlined'/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {rentOptions.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, proType, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </div>
       
      
      <div><Button type = "submit"><Search></Search>Search Property Now..</Button></div>
      
    </div>
    </form>
  );
}