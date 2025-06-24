import React from 'react'
import estilos from '../../css/Meta.module.css'
import gralcss from '../../css/General.module.css'
import { Link } from 'react-router-dom'


const Meta = ({id, icono,eventos,periodo,detalles, meta, completado}) => {
    // const {icono,eventos,periodo,detalles, meta, completado} = metaMock;
  return (
    <Link to={`/lista/${id}`} className={estilos.meta + " neu"}>
        <div className='flex items-center'>
            <div className={estilos.icono}>{icono}</div>
            <p className="text-xl ml-4 mr-10">
                {eventos} 
                <sub className='text-xs text-gray-400 ml-1'>/{periodo}</sub>
                </p>
            <p>{detalles}</p>
        </div>
        <div className='flex items-center'>
            <div className='relative m-2 mx-5'>
                <p className='text-center'>{completado} de {meta}</p>
                <div className={estilos.barra1 +" neu"}>
                    <div style={{ width: `${Math.round((completado/meta)*100)}%`}} className={estilos.barra2}></div>
                </div>
            </div>
            <button className={gralcss.boton + " neu"}>Completado</button>
        </div>
    </Link>
  )
}

export default Meta
