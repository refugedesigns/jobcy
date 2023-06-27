"use client";
import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { TiSocialFacebook } from "react-icons/ti";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";
import { AiOutlineTwitter } from "react-icons/ai";
import footerLinks from "@/data/footerLinks.json";
import LinkSection from "./LinkSection";

const Footer = () => {
  return (
    <Box className="bg-slate-700 text-slate-400">
      <Grid container maxWidth="lg" className="w-full mx-auto py-16 space-y-10 md:space-y-0 px-[10%] xl:px-[5%]">
        <Grid item md={6} justifyContent="flex-end" className="mx-auto">
          <Box>
            <Typography variant="h5" className="text-white">
              Jobcy
            </Typography>
            <Typography variant="body2" className="py-4 max-w-sm">
              It is a long established fact that a reader will be of a page
              reader will be of at its layout.
            </Typography>
          </Box>
          <Box>
            <Typography className="text-white">Follow Us on: </Typography>
            <Box className="space-x-4 mt-4">
              <IconButton className="border border-solid border-slate-400 hover:bg-white">
                <TiSocialFacebook className="text-slate-400 h-4 w-4" />
              </IconButton>
              <IconButton className="border border-solid border-slate-400 hover:bg-white">
                <FiLinkedin className="text-slate-400 h-4 w-4" />
              </IconButton>
              <IconButton className="border border-solid border-slate-400 hover:bg-white">
                <SlSocialGoogle className="text-slate-400 h-4 w-4" />
              </IconButton>
              <IconButton className="border border-solid border-slate-400 hover:bg-white">
                <AiOutlineTwitter className="text-slate-400 h-4 w-4" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          md={6}
          className="mx-auto"
          justifyContent="space-around"
        >
          {footerLinks.map((footerLink, index) => (
            <Grid key={index} item>
              <LinkSection title={footerLink.title} links={footerLink.links} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
