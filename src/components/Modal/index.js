import React, { useState } from 'react';
import './styles.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
    if (hideModal) return null;
    console.log("tri++");
    return (
        <>
            <div className="modalOverlay" onClick={() => toggleModal()} />
            <div className="modal">
                {children}
            </div>
        </>
    );
}

export default Modal;