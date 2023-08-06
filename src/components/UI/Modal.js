import React  from 'react';
import {createPortal} from 'react-dom';
import classes from './Modal.module.css'
const BackDrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onHidden}>
            
        </div>
    );
}





const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}


const Modal = (props) => {
    return <>
        {createPortal(<BackDrop onHidden={props.onHide}/>,document.getElementById('backdrop'))}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('backdrop'))}
        </>
        
}

export default Modal;
