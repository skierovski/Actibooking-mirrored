import { FormControl, TextField, Typography } from '@mui/material';
import Button from '../../Button/Button';
import './LogInForm.css'


const LogInForm = () => {
    return ( 
        <>
    <FormControl required={true}>
        <TextField type='email' sx={{width: {sm: 500}}} id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" />
        <TextField type='password' id="outlined-basic" sx={{ color: 'red' }} label="Password" variant="outlined" margin="dense" size="small" />
    </FormControl>
    <Typography sx={{fontSize: '0.7rem'}} variant='subtitle1' noWrap={true}>You dont have account ? <Button style={{fontSize: '0.7rem', display: 'inline-block', position: 'relative', border: 'none', background: 'transparent'}} functionProps={true}  text='register here!' animation='change-color-text'/>
    </Typography>
    <Button style={{fontSize: '1rem', display: 'inline-block', position: 'relative', border: 'none', background: 'rgb(10, 212, 20)', borderRadius: '10px', width: '100%', height: '3vh'}}  text='Log In'/>
    </>
    );
}
 
export default LogInForm;