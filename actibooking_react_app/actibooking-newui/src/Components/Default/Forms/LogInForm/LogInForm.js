import { Box, FormControl, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Button from '../../Button/Button';
import RegisterForm from '../RegisterForm/RegisterForm';
import './LogInForm.css'


const LogInForm = () => {
    const [register, setRegister] = useState(false)
    return ( 
        <Box sx={{margin: '12% 5% 5% 5%', display: 'flex', flexDirection: 'column', width: '100vw'}}>
            {register ?
            <RegisterForm/>
            :
            <>
            <FormControl required={true} fullWidth={true}>
                    <TextField type='email' sx={{ width: '100%' }} id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" />
                    <TextField type='password' id="outlined-basic" sx={{ color: 'red' }} label="Password" variant="outlined" margin="dense" size="small" />
                </FormControl><Typography sx={{ fontSize: '0.8rem' }} variant='subtitle1' noWrap={true}>You dont have account?<Button style={{ fontSize: '0.7rem', display: 'inline-block', position: 'relative', border: 'none', background: 'transparent' }} function={setRegister} functionProps={true} text='register here!' animation='change-color-text' />
                    </Typography><Button style={{ fontSize: '1rem', display: 'inline-block', position: 'relative', border: 'none', background: 'rgb(10, 212, 20)', borderRadius: '7px', width: '100%', height: '4vh' }} text='Log In' />
                    </>
             }
    
    </Box>
    );
}
 
export default LogInForm;