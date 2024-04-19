import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RickAndMorty from '../RickAndMorty'
import Tarjeta from '../Componentes/Tarjeta'

const Navegacion = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tarjeta/>} />
                <Route path='/caracter' element={<RickAndMorty/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacion