import React from 'react';
import LogoClaro from '../img/logo-claro.png';
import LogoOscuro from '../img/logo-oscuro.png';
import styled from '@emotion/styled';
const Img = styled.img`
    max-width: 50%;
    height: auto;
`;

const Logo = () => {
    const page = window.location.pathname;
    return ( 
        <div>
            {page === '/contacto' ? <Img src={LogoClaro} alt="Logo Fondo Claro" /> : <Img src={LogoOscuro} alt="Logo Fondo Oscuro" />}
        </div>
    );
}

export default Logo;