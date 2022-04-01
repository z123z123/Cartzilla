import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Form,
  FormControl,
  NavItem,
  InputGroup,
  Button,
} from "react-bootstrap";
import React from "react";

import MagnifyingGlass from "./../../img/MagnifyingGlass.svg";

export function Header() {
  const cities = [
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "San Diego",
    "Miami",
  ];
  const [inputShow, setInputShow] = React.useState(true);

  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="https://getbootstrap.com/docs/5.1/layout/grid/">
            <Image
              src="./../../img/Cartzilla_logo.png"
              alt="Cartzilla logo"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>

          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavDropdown
                title="New York"
                id="city-selector"
              >
                {cities.map((city) => (
                  <NavDropdown.Item
                    href="https://getbootstrap.com/docs/5.1/layout/grid/"
                    key={city}
                  >
                    {" "}
                    {city}{" "}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavLink href="#cuisine" id="cuisine">
                Cuisine
              </NavLink>
            </Nav>

{/* <Button onClick={() => setInputShow(!inputShow)} >
<Image src={GeoLocationSvg} />
</Button> */}
            <Nav className={`ms-auto align-items-center ${inputShow ? "d-flex" : "d-none"}`}>
              <Form className="d-flex">
                <InputGroup className="search_field">
                <FormControl
                id="search"
                  type="search"
                  className="me-2"
                  aria-label="Search"

                  />
                  <Image src={MagnifyingGlass} />
                </InputGroup>

                    
              </Form>

              {/* <li className="nav-item" id="search">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li> */}

              <NavLink
                id="user"
                href="https://getbootstrap.com/docs/5.1/layout/grid/"
              >
                <svg
                  id="user-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6875rem"
                  height="1.6875rem"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </NavLink>

              <NavItem className="ms-auto" id="cart">
                <NavLink
                  className="ms-auto cir"
                  href="https://getbootstrap.com/docs/5.1/layout/grid/"
                >
                  <span className="sticky" id="number-of-items-in-cart">
                    <b>3</b>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.6875rem"
                    height="1.6875rem"
                    className="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
