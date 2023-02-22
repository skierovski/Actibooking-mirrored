import { FormControl, TextField } from "@mui/material";

const RegisterForm = () => {
    return ( 
        <FormControl>
            <TextField type='email' sx={{width: '100%'}} id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" />
            <TextField type='password' id="outlined-basic" sx={{ color: 'red' }} label="Password" variant="outlined" margin="dense" size="small" />
           
        </FormControl>
     );
}
 
export default RegisterForm;