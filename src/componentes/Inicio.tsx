import { useState } from "react";
import React from 'react';

const Inicio = () => {


	return (
		<div className=" p-10 m-10">
			<h1 className="text-2xl font-bold text-gray-700 mb-4">Bienvenido a tu Panel de Metas</h1>

			<p className="text-gray-600 text-base mb-6">
				Esta aplicación está diseñada para ayudarte a establecer, organizar y lograr tus metas personales o profesionales
				durante todo el año. Puedes visualizar tu avance en tiempo real mediante barras de progreso, registrar hitos y mantenerte motivado
				con una interfaz simple y funcional.
			</p>

			<div className="bg-gray-200 rounded-xl p-4 shadow-inner">
				<h2 className="text-lg font-semibold text-gray-700 mb-2">Meta destacada del mes</h2>
				<p className="text-gray-600 mb-4">Leer 2 libros técnicos completos y escribir un resumen personal.</p>

				{/* <div className="mb-2 text-sm text-gray-500">Progreso actual:%</div>
				<div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
					<div className="h-full bg-gray-700 transition-all duration-300" />
				</div> */}
			</div>

			<div className="mt-6 text-sm text-gray-500 italic">
				“Una meta sin un plan es solo un deseo.”
			</div>
		</div>
	)
}

export default Inicio
