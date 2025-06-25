import React from 'react';
import Detalles from './nueva/Detalles';

const Modal = ({ children }) => {


    return (

        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="z-10">
                {children}
            </div>
        </div>
    )
}

export default Modal
