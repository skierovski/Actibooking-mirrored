import Button from '../Button/Button'
import React, { useContext } from 'react'
import  ReactDom  from 'react-dom'
import './Modal.css'
import ClearIcon from '@mui/icons-material/Clear';
import ResponsiveProvider from '../../../Context/ResponsiveContext';

export default function Modal({open, onClose, children}) {
    const responsive_ctx = useContext(ResponsiveProvider);
    const width = responsive_ctx.screenWidth;
    console.log(width)
    if (!open) return null
    return  ReactDom.createPortal(
    <>
    <div className='modal'>
        <div className='modal-content'>
            {children}
            <Button animation='none' text={<ClearIcon/>} style={{position: 'absolute', fontSize: '1.3rem', border: 'none', borderRadius: '10px', backgroundColor: 'transparent', color: 'black', top: '1%', right: '1%'}} function={onClose}/>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
