import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='md' className='p-3' >
        <Navbar.Brand href='/'>ToDoApp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
                <Link to='/' className='nav-link'>Login</Link>
                <Link to='/todos' className='nav-link'>Todo</Link>
                <Link to='/categories' className='nav-link'>Categories</Link>
                <Link to='/bootstrap' className='nav-link'>Bootstrap</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}