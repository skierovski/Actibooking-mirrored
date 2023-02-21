import Style from './Navbar.module.css';
import {Grid} from '@mui/material';
import Button from '../Default/Button/Button';
import Modal from '../Default/Modal/Modal';
import { useState } from 'react';

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    
    return ( 
    <>
        <Grid item xs={7} sx={{alignItems: 'center'}}>
        <span className={Style.Logo}>actibooking</span>
        </Grid>
        <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button style={{fontSize: '1.2rem', display: 'inline-block', position: 'relative', border: 'none', background: 'transparent', letterSpacing: '2px'}} function={setOpenModal} functionProps={true}  text='sign up/log in' animation='underline'/>
        <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
        </Grid>
    </>
     );
}
 
export default Navbar;