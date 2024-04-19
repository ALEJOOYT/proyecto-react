import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RickAndMorty from '../RickAndMortySpa'
import Tarjeta from '../Componentes1/Tarjeta'

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