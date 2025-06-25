import React, { useContext, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Layout from './componentes/Layout'
import Lista from './componentes/lista/Lista'
import Detalles from './componentes/nueva/Detalles'
import Pagina_404 from './componentes/Pagina_404'
import Inicio from './componentes/Inicio'
import Modal from './componentes/Modal'
import { Contexto } from './componentes/servicios/Memoria';
import { pedirMetas } from './componentes/servicios/Pedidos';

function App() {
	const [,enviar] = useContext(Contexto);

	useEffect(() => {
		const obtenerDatos = async () => {
			const metas = await pedirMetas(); 
			enviar({ tipo: 'colocar', metas }); 
		};
		obtenerDatos();
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Layout/>} >
			
				<Route index element={<Inicio/>}/>
				<Route path='/lista' element={<Lista/>}>
					<Route path="/lista/:id" element={
						<Modal>
							<Detalles/>
						</Modal>
					}/>
				</Route>
				<Route path='/crear' element={<Detalles/>} />
				
			</Route>
			<Route path="*" element={<Pagina_404/>}/>
			
		</Routes>
	)
}

export default App
