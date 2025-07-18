import React, { Children, createContext, useReducer } from 'react'

export const Contexto = createContext(null);

const estadoInicial = {
    orden: [],
    objetos: {}
}

function reductor(estado, accion) {
    switch (accion.tipo) {
        case 'colocar': {
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce((objeto, meta) => ({ ...objeto, [meta.id]: meta }), {})
            }
            // localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        }

        case 'crear': {
            const id = accion.meta.id;//String(Math.random());//accion.meta.id;
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {
                    ...estado.objetos,
                    [id]: accion.meta
                }
            }
            // localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        }

        case 'actualizar': {
            const id = accion.meta.id;
            estado.objetos[id] = {
                ...estado.objetos[id],
                ...accion.meta
            }
            const nuevoEstado = { ...estado }
            // localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        }

        case 'borrar': {
            const id = accion.id;
            const nuevoOrden = estado.orden.filter(item => item !== id);
            delete estado.objetos[id];
            const nuevoEstado = {
                orden: nuevoOrden,
                objetos: estado.objetos
            }
            // localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            return nuevoEstado;
        }

        default: throw new Error();
    }
}

// reductor(estadoInicial, { tipo: 'colocar', metas: listaMock });

const Memoria = ({ children }) => {

    const [estado, enviar] = useReducer(reductor, estadoInicial);

    return (
        <Contexto.Provider value={[estado, enviar]}>
            {children}
        </Contexto.Provider>
    )
}

export default Memoria
