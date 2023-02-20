import Style from './Navbar.module.css';
import {Grid} from '@mui/material';
import Button from '../Default/Button/Button';

const Navbar = () => {
    return ( 
    <>
        <Grid item xs={7} sx={{alignItems: 'center'}}>
        <span className={Style.Logo}>actibooking</span>
        </Grid>
        <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button style={{fontSize: '1.2rem', display: 'inline-block', position: 'relative', border: 'none', background: 'transparent', letterSpacing: '2px'}}  text='sign up/log in' animation='underline'/>
        </Grid>
    </>
     );
}
 
export default Navbar;