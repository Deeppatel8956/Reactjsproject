import React from 'react';
import Header from './Componentes/Header/Header'
import Home from './Componentes/Home/Home';
import Footer from './Componentes/footer/Footer'
import {Outlet} from 'react-router-dom'
import About from './Componentes/About/About';
function Layout(props) {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;