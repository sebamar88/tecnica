import React from 'react';
import Menu from './menu';
import Logo from './logo';
import ContactButton from './contactButton';
import styled from '@emotion/styled';
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;

const Navbar = () => {
    return ( 
        <Nav>
            <Menu />
            <Logo/>
            <ContactButton/>
        </Nav>
    );
}

export default Navbar;