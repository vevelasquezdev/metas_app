// import './css/General.module.css'
import { Route, Routes, Link } from 'react-router-dom'
import Layout from './componentes/Layout.jsx'
import Lista from './componentes/lista/Lista'
import Detalles from './componentes/nueva/Detalles'
import Pagina_404 from './componentes/Pagina_404'
import Inicio from './componentes/Inicio.jsx'
import Modal from './componentes/Modal.jsx'

function App() {
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
