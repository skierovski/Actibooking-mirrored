import { FormControl, TextField, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import Button from "../../Button/Button";
import { useState } from "react";

const RegisterForm = () => {
    const [value, setValue] = useState('female')

  function handlechange (event){
    setValue((event.target).value);
  }
    return ( 
        <>
        <FormControl>
            <TextField type='email' sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" />
            <TextField type='password' id="outlined-basic" sx={{ width: '100%' }} label="Password" variant="outlined" margin="dense" size="small" />
        </FormControl>
        <FormControl sx={{display: 'flex', flexDirection: 'row', gap: '1%'}}>
            <TextField type='text' sx={{ width: '50%' }} id="outlined-basic" label="First name" variant="outlined" margin="dense" size="small" />
            <TextField type='text' sx={{ width: '50%' }} id="outlined-basic" label="Last name" variant="outlined" margin="dense" size="small" />
        </FormControl>
        <FormControl sx={{display: 'flex', flexDirection: 'row', gap: '1%'}}>
            <TextField type='date' sx={{ width: '50%' }} id="outlined-basic" variant="outlined" margin="dense" size="small" />
            <TextField type='text' sx={{ width: '50%' }} id="outlined-basic" label="Phone number" variant="outlined" margin="dense" size="small" />
        </FormControl>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            name="radio-buttons-group"
            handleChange={handlechange}
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>
        <Button style={{ fontSize: '1rem', display: 'inline-block', position: 'relative', border: 'none', color: 'black', background: 'rgb(10, 212, 20)', borderRadius: '7px', width: '100%', height: '4vh' }} text="Register " />
        </>
     );
}
 
export default RegisterForm;