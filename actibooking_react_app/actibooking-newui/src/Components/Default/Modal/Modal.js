import Button from '../Button/Button'
import React, { useContext } from 'react'
import  ReactDom  from 'react-dom'
import './Modal.css'
import ClearIcon from '@mui/icons-material/Clear';
import ResponsiveProvider from '../../../Context/ResponsiveContext';
import { Box } from '@mui/system';

export default function Modal({open, onClose, children}) {
    const responsive_ctx = useContext(ResponsiveProvider);
    const width = responsive_ctx.screenWidth;
    console.log(width)
    if (!open) return null
    return  ReactDom.createPortal(
    <>
    <div className='modal'>
        <div className='modal-content'>
        <Box sx={{margin: '12% 5% 5% 5%', display: 'flex', flexDirection: 'column', width: '100vw'}}>
            {children}
            </Box>
            <Button animation='none' text={<ClearIcon fontSize="large"/>} style={{position: 'absolute', fontSize: '1.3rem', border: 'none', borderRadius: '10px', backgroundColor: 'transparent', color: 'black', top: '1%', right: '1%'}} function={onClose}/>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
