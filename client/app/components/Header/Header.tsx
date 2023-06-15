"use client";
import React, { useState, useEffect } from "react";
import { IoLocation, IoLogoWhatsapp } from "react-icons/io5";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiMail, CiTwitter, CiLock } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";
import {
  Typography,
  Button,
  Navbar,
  Collapse,
  IconButton,
  Badge,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex items-center">
      <Typography as="li">
        <Link href="#">Services</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">Team</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">Pricing</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">About Us</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">Privacy Policy</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">FAQS</Link>
      </Typography>
      <Typography as="li">
        <Link href="#">Contact</Link>
      </Typography>
    </ul>
  );
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
      <Navbar>
        <div className="flex items-center justify-between">
          <div className="h-[28px]">
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
          </div>
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center">
            <IconButton
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
              variant="text"
            >
              <FiMenu className="h-5 w-5" />
            </IconButton>
            <Badge overlap="circular" placement="top-end" content="5">
              <IconButton>
                <BsFillBellFill className="w-6 h-6" />
              </IconButton>
            </Badge>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/user/img-01.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full"
                alt="user"
              />
            </div>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
