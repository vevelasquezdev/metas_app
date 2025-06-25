import React from 'react';
import estilos from '../css/Vinculo.module.css';
import { Link } from 'react-router-dom';


interface VinculoProps {
	Icono?: string;
	texto?: string;
	href: string;
};

function Vinculo({ Icono, texto, href } :VinculoProps ) {
    return (
        <>
            <Link to={href} className={estilos.vinculo}>
               {Icono}
                {texto && <span className={estilos.texto}>{texto}</span>}
            </Link>
          
        </>
    )
}

export default Vinculo

