import Style from './Navbar.module.css';
import {Grid} from '@mui/material';
import Button from '../Default/Button/Button';
import Modal from '../Default/Modal/Modal';
import { useState, useEffect } from 'react';
import LogInForm from '../Default/Forms/LogInForm/LogInForm';;


const Navbar = (props) => {
    const [openModal, setOpenModal] = useState(false)
    let [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollPosition)

    return ( 
    <Grid container sx={scrollPosition > 40.5? {backgroundColor: 'black', position: 'fixed', top: '0%', maxWidth: '1440px', width: '100%'}: ''}>
        <Grid item xs={7} sx={{alignItems: 'center'}}>
        <span className={Style.Logo}>actibooking</span>
        </Grid>
        <Grid item xs={5} sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button style={{fontSize: '1.2rem', color: 'white', display: 'inline-block', position: 'relative', border: 'none', background: 'transparent', letterSpacing: '2px'}} function={setOpenModal} functionProps={true}  text='sign up/log in' animation='underline'/>
        <Modal open={openModal} onClose={() => setOpenModal(false)} children={<LogInForm/>}></Modal>
        </Grid>
    </Grid>
     );
}
 
export default Navbar;