import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {DrAppts} from '../styles/shared';
import { NavigationItems } from '../styles/shared';
import { NavItems } from '../styles/shared';

const MainNavbar = () => (
  <>
    <Navbar >
      <Container>
        <Link to='/'>
          <DrAppts>DrAppts</DrAppts>
          </Link>
          <Nav>
            <NavigationItems>
              <Link to="/doctors">
              <NavItems> Doctors </NavItems>
              </Link>
            </NavigationItems>
            <NavigationItems>
              <Link to="/users">
                <NavItems> Users </NavItems>
              </Link>
            </NavigationItems>
          </Nav>
       
      </Container>
    </Navbar>
  </>
)

export default MainNavbar;