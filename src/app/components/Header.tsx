'use client'

import React, { useState,useEffect } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';



const Header: React.FC = () => {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
          setUser(JSON.parse(savedUser));
          setIsUser(true);
      } else {
          setUser(null);
      }
  }, [router]);
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
        {isUser ? (<><NavbarItem className="hidden lg:flex">
          <Link href="/profile">Welcome, {user.username}</Link>
        </NavbarItem></>) : (<><NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem></>)}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
