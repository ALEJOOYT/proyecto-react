import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RickAndMorty from '../Episodios.jsx'
import Inicio from '../inicio.jsx'

const Navegacion = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/episodios' element={<RickAndMorty/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacion