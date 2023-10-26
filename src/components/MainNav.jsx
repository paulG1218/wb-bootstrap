import { Container, Navbar, Nav, NavLink } from "react-bootstrap";

export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <Navbar expand="lg" className="navbar-light" style={{backgroundColor: '#19910f'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{color: '#c70a75'}}>{brand}</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="me-auto">
              {leftLinks.map(({ url, text }, index) => (
              <NavLink key={index} href={url}>
                {text}
              </NavLink>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>
                {text}
              </Nav.Link>
            ))}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
{/* <nav>
      <a href="/">{brand}</a>
      <ul>
        {leftLinks.map(({ url, text }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
      <ul>
        {rightLinks.map(({ url, text }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </nav> */}