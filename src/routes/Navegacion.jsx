import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Episodios from '../Episodios.jsx'
import Inicio from '../inicio.jsx'

const Navegacion = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/episodios' element={<Episodios/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacion