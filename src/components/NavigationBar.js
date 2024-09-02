import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavLink href="https://campsite.bio/smanugombengsari" style={{ backgroundColor: '#228B22', padding: '5px 10px', borderRadius: '15px', opacity: '0.8', boxShadow: '0px 0px 10px rgba(255,255,255), 0px 0px 40px rgba(255,255,255)', color: 'white', fontSize: '15px' }}>
            CONTACT PERSON
          </NavLink>
          <Nav className="5%"> {/* Mengatur posisi Nav ke kanan */}
            <NavLink href="#trending" style={{ backgroundColor: '#228B22', padding: '5px 10px', borderRadius: '25px', opacity: '10', boxShadow: '0px 0px 10px rgba(255,255,255), 0px 0px 40px rgba(255,255,255)', marginRight: '10px' }}>
              INFO
            </NavLink>
            <NavLink href="#superhero" style={{ backgroundColor: '#228B22', padding: '5px 10px', borderRadius: '25px', opacity: '10', boxShadow: '0px 0px 10px rgba(255,255,255), 0px 0px 40px rgba(255,255,255)' }}>
              DOKUMENTASI
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
