"use client";
import React, { useState, useEffect, MouseEvent } from "react";
import { IoLocation, IoLogoWhatsapp } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiMail, CiTwitter, CiLock } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";
import {
  Typography,
  Button,
  Collapse,
  IconButton,
  Badge,
  Avatar,
  AppBar,
  Container,
  Toolbar,
  MenuItem,
  Menu,
  Tooltip,
  Box,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const pages = [
  "Services",
  "Team",
  "Pricing",
  "About Us",
  "Privacy Policy",
  "FAQS",
  "Contact",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gray-200 px-[5%] py-1 dark:bg-slate-700">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <IoLocation />
            <Typography variant="body2" className="text-xs">
              Your Location:{" "}
              <span className="hover:cursor-pointer">New Caledonia</span>
            </Typography>
          </div>
          <IoLogoWhatsapp className="hover:cursor-pointer hover:text-blue-400" />
          <RiMessengerLine className="hover:cursor-pointer hover:text-blue-400" />
          <AiOutlineInstagram className="hover:cursor-pointer hover:text-blue-400" />
          <CiMail className="hover:cursor-pointer hover:text-blue-400" />
          <CiTwitter className="hover:cursor-pointer hover:text-blue-400" />
        </div>
        <div className="flex items-center space-x-1">
          <CiLock />
          <Button className="capitalize font-light hover:bg-transparent">
            Sign up
          </Button>
        </div>
      </div>
      <AppBar
        position="sticky"
        className="shadow-none bg-white dark:bg-slate-800"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className="flex justify-between w-full items-center hover:cursor-pointer">
              <Box className="h-[28px]">
                <Image
                  src="/images/logo-light.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt=""
                  className="hidden w-full h-full object-contain dark:block"
                />
                <Image
                  src="/images/logo-dark.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt=""
                  className="w-full h-full object-contain dark:hidden"
                />
              </Box>
              <Box className="hidden md:flex space-x-3">
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    className="text-black dark:text-white"
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box className="space-x-6">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  className="-mr-5 md:hidden"
                >
                  <FiMenu />
                </IconButton>
                <IconButton>
                  <Badge badgeContent={5} color="primary">
                    <BsFillBellFill className="text-black dark:text-white h-5 w-5 hover:cursor-pointer" />
                  </Badge>
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
