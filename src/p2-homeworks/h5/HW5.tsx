import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Layout from "./Layout"
import Junior from "./pages/Junior"
import PreJunior from "./pages/PreJunior"
import UpperJunior from "./pages/UpperJunior"
import Error404 from "./pages/Error404"


function HW5() {

    // При выполнении этой домашки использовал новую версию React Router Dom;
    // В объекте PATH прописаны адреса ссылок для отрисовки определенных компонент;

    const PATH = {
        PRE_JUNIOR: '/',
        JUNIOR: 'junior',
        UPPER_JUNIOR: 'upper-junior'
    }
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout {...PATH} />}>
                    <Route index element={<PreJunior/>} />
                    <Route path={PATH.JUNIOR} element={<Junior/>} />
                    <Route path={PATH.UPPER_JUNIOR} element={<UpperJunior/>} />
                    <Route path={'*'} element={<Error404/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default HW5
