import React from 'react'
import estilos from '../css/Vinculo.module.css'
import { Link } from 'react-router-dom'

function Vinculo({ Icono, texto, href }) {
    return (
        <div>
            <Link to={href} className={estilos.vinculo}>
               {Icono}
                {texto && <span className={estilos.texto}>{texto}</span>}
            </Link>
            {/* <a href={href} className={estilos.vinculo}>
                {Icono}
                {texto && <span className={estilos.texto}>{texto}</span>}
            </a> */}
        </div>
    )
}

export default Vinculo

