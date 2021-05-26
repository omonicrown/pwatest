import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const styles = styled.div `
.navbar{
    
    background-color:blue;
}

.navbar-brand, .navbar-nav .nav-link {
    color:#bbb;

    &:hover {
        color:white;
    }
}

`;

export const NavigationBar = () => {
    const cardstyle= {
        backgroundColor: 'grey',
        color: 'blue',
        }
return (
    <Navbar  expand="md" style={{backgroundColor:'grey',color:'blue'}} >
      <Container>
    <Navbar.Brand href="/"><b>Interview 2</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  >
      <Nav className="justify-content-end" >
        <Nav.Link href="/show" >Packages</Nav.Link>
        <Nav.Link href="/subscription">Subscriptions</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>


)
}
