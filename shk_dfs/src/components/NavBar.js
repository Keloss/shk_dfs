import { LIST_ROUTE, PATH_ROUTE } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-dark text-white italic p-3 text-lg">
            <Container>
                    <Nav className="ml-auto">
                        <NavLink className='mr-5' to={PATH_ROUTE}>Home</NavLink>
                        <NavLink to={LIST_ROUTE}>List</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    );
};  

export default NavBar;