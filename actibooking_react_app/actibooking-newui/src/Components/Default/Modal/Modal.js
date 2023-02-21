import Button from '../Button/Button'
import React from 'react'
import  ReactDom  from 'react-dom'
import './Modal.css'

export default function Modal({open, onClose, children}) {
    if (!open) return null
  return ReactDom.createPortal(
    <>
    <div className='modal'>
    <Button animation='none' text='X' style={{position: 'absolute', fontSize: '1.3rem', border: 'none', borderRadius: '10px', backgroundColor: 'transparent', color: 'white', top: '2%', right: '2%'}} function={onClose}/>
        <div className='modal-content'>
            {children}
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
