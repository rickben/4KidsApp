import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'
import popUp from "./pop-up";

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light ',
})`
    margin-bottom: 20 px;
    background-color: #69d26a;
    txt-color: white;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                    <popUp/>
                </Nav>
            </Container>
        )
    }
}

export default NavBar