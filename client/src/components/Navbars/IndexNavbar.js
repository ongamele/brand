import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import logo from "../../assets/img/logo/logo1.svg";
import "./IndexNavBar.css";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top home-nav" expand="lg" color="info">
        <div className="navbar-translate">
          <NavbarBrand href="/" target="_blank" id="navbar-brand">
            <img alt="..." className="logo" src={logo} />
          </NavbarBrand>
          <UncontrolledTooltip target="#navbar-brand">
            Designed by Invision. Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            className="navbar-toggler navbar-toggler"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(!collapseOpen);
            }}
            aria-expanded={collapseOpen}
            type="button">
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <Collapse className="collapse-nav" isOpen={collapseOpen} navbar>
          <Nav navbar className="nav-container">
            <NavItem>
              <NavLink>
                <p>Services</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <p>Industries</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <p>Cases</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <p>Contact</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button size="sm" className="lets-talk-button-mobile">
                  Lets Talk
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Button size="sm" className="lets-talk-button">
          Lets Talk
        </Button>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
