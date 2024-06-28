'use client'

import React, { useState,useEffect } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem,User } from "@nextui-org/react";

const items=[
  {
    key: "profile",
    label: "Profile"
  }, 
  {
    key: "logout",
    label: "Log out"
  }
]

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

  const handleClick = () => {
    localStorage.setItem("user","");
    router.push("/logout");
  }

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
          <Dropdown className='dark:dark dark:bg-gray-900 dark:text-white'>
            <DropdownTrigger>
              <Button variant='flat'>
                <User name={user?.username} description="User" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" items={items}>
                <DropdownItem as={Link} href="/profile"
                  key="profile"
                  color="default"
                >
                  Profile
                </DropdownItem>
                <DropdownItem 
                  key="logout"
                  color="danger"
                  className='text-danger'
                  onClick={ handleClick }
                >
                  Log out
                </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
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
