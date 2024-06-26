import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


const Header: React.FC = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link color="foreground" href="/">ACME</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/mathematics">
            Mathematics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/english">
            English
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/practice">
            Practice Test
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
