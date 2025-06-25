import React, { useEffect, useState, useContext } from 'react'
import estilos from '../../css/Detalles.module.css'
import gralcss from '../../css/General.module.css'
import { Contexto } from '../servicios/Memoria';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {crearMeta,actualizarMeta,borrarMeta} from '../servicios/Pedidos.js'


const opc_frec = ["dia", "semana", "mes", "año"];
const arr_iconos = ["🏃‍♂️", "📚", "✈️", "🏊", "🍕", "💻"];

const Detalles = () => {

    const { id } = useParams();

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '💻',
        meta: 52,
        plazo: '2030-01-01',
        completado: 0
    });

    const [estado, enviar] = useContext(Contexto);

    const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
    }
    const redireccionar = useNavigate();

    useEffect(() => {
        const metaMemoria = estado.objetos[id];        
        if (!id) return;
        if (!metaMemoria) {
            return redireccionar('/lista');
        }
        setForm(metaMemoria);
    }, [id, estado.objetos, redireccionar]);

    
    const crear = async () => {
        const nuevaMeta = await crearMeta();
        enviar({ tipo: 'crear', meta: nuevaMeta })
        redireccionar('/lista');
    }

    const cancelar = () => {
        redireccionar('/lista');
    }

    const actualizar = async () => {
        const metaActualizada = await actualizarMeta();
        enviar({ tipo: 'actualizar', meta: metaActualizada })
        redireccionar('/lista');
    }

    const borrar = async () => {
        const id_borrar = await borrarMeta();
        enviar({ tipo: 'borrar', id:id_borrar})
        redireccionar('/lista');
    }

    return (
        <div className={gralcss.meta + " neu"}>
            <form className='p-4' action="">
                <label className={gralcss.label}>
                    Describe tu meta
                    <input className={gralcss.input + " neu--inset"} placeholder='ej. 53 caminatas' value={detalles} onChange={e => onChange(e, 'detalles')} />
                </label>
                <label className={gralcss.label}>
                    ¿Con que frecuencia deseas tu meta?
                    <span className=' text-gray-400 lowercase ml-2'>(ejemplo: 1 vez a la semana)</span>
                    <div className='flex'>
                        <input className={gralcss.input + " neu--inset mr-6"} type='number' value={eventos} onChange={e => onChange(e, 'eventos')} />
                        <select className={gralcss.input + " neu--inset"} value={periodo} onChange={e => onChange(e, 'periodo')}>
                            {opc_frec.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label className={gralcss.label}>
                    ¿Cuantas veces deseas completar esta meta?
                    <input className={gralcss.input + " neu--inset"} type="number" value={meta} onChange={e => onChange(e, 'meta')} />
                </label>
                <label className={gralcss.label}>
                    ¿TIENES UNA FECHA LÍMITE?
                    <input className={gralcss.input + " neu--inset"} type="date" value={plazo} onChange={e => onChange(e, 'plazo')} />
                </label>
                <label className={gralcss.label}>
                    ¿Cuantas veces has completado ya esta meta?
                    <input className={gralcss.input + " neu--inset"} type="number" value={completado} onChange={e => onChange(e, 'completado')} />
                </label>
                <label className={gralcss.label}>
                    Escoje el icono para la meta
                    <select className={gralcss.input + " neu--inset"} value={icono} onChange={e => onChange(e, 'icono')}>
                        {arr_iconos.map(option => <option key={option} value={option}>{option}</option>)}

                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                {!id && <button
                    onClick={crear}
                    className={gralcss.boton + " neu_boton " + gralcss.boton_negro}>Crear</button>
                }
                {id && <button
                    onClick={actualizar}
                    className={gralcss.boton + " neu_boton " + gralcss.boton_negro}>Actualizar</button>
                }
                 {id && <button
                    onClick={borrar}
                    className={gralcss.boton + " neu_boton " + gralcss.boton_rojo}>Borrar</button>
                }
                <button 
                    onClick={cancelar}
                    className={gralcss.boton + " neu_boton " + gralcss.boton_gris}>Cancelar</button>
            </div>
        </div>
    )
}

export default Detalles
