import React from 'react'
import Principal from './Principal'
import Pie from './Pie'
import Encabezado from './Encabezado'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
            <Encabezado/>
         
            <Principal>
                <Outlet/>
            </Principal>
            <Pie/>
        </>
    )
}

export default Layout
