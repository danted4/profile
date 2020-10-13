import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationComponent = () =>{
    return <React.Fragment>
        <Navbar fixed='top' bg='dark' varient='dark'>
            <Navbar.Brand><Link to='/home' className="no-decor">Kanav</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link><Link className="btn btn-secondary" to='/home'>Hello</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-primary" to="/skills">Skills</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-primary" to="/work">Work</Link></Nav.Link>
            <Nav.Link><Link className="btn btn-primary" to="/contact">Contact</Link></Nav.Link>
    </Nav>
        </Navbar>

    </React.Fragment>

}

export default NavigationComponent;