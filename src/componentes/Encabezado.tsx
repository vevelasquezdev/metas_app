import React from 'react';
import estilos from '../css/Principal.module.css'
import { IconoUser } from './Icono'
import Vinculo from "./Vinculo"

function Encabezado() {
    return (
        <header className={estilos.encabezado}>
            <div className="flex items-center pl-4">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/fire-element--v1.png" alt="fire-element--v1"/>
                <a className="pl-2" href="/">Metas App</a>
            </div>
            <nav>
                 <Vinculo 
                    href="/perfil" 
                    Icono={<IconoUser/>}>                    
                </Vinculo>
                
            </nav>
        </header>
    )
}

export default Encabezado
