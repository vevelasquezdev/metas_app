
import React from 'react';
import Vinculo from "./Vinculo";
import estilos from '../css/Principal.module.css';
import {ListaIcono, NuevaMetaIcono } from './Icono';
function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>                
                <Vinculo 
                    href="/lista" 
                    texto="Lista de Metas"
                    Icono={<ListaIcono/>}>
                </Vinculo>
                <Vinculo 
                    href="/crear" 
                    texto="Nueva Meta"
                    Icono={<NuevaMetaIcono/>}>                    
                </Vinculo>
            </aside>
            <main className={estilos.main}>
                {children}
                
                
                {/* <button class="neu px-6 py-3 rounded-lg text-gray-600">
                    Botón Neumórfico
                </button>
                <div class="cubito">
                    OTRO
                    ASD
                    ASDASD
                </div>

             
                <div class="neu p-6 max-w-sm mx-auto rounded-xl">
                <h3 class="text-xl font-semibold text-gray-700">Título</h3>
                <p class="mt-2 text-gray-600">Contenido con efecto neumórfico</p>
                </div>

              
                <div class="neu-dark p-6 text-gray-200 rounded-lg">
                Modo oscuro
                </div>

                
                <button class="neu active:neu-pressed transition-shadow duration-200 p-4">
                Presióname
                </button> */}
            </main>
        </div>
    )
}

export default Principal