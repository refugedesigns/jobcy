import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  Grid,
  CardContent,
  Chip,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Image from "next/image";

type Props = {
  logoImage: string;
  jobTitle: string;
  company: string;
  companyInitials?: string;
  location: string;
  salaryRange: string;
  experience: string;
  tags: string[];
};

const SingleJobCard = (props: Props) => {
  const {
    logoImage,
    jobTitle,
    company,
    companyInitials,
    location,
    salaryRange,
    experience,
    tags,
  } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.5, ease: "easeOut" },
        borderColor: "#766df4",
      }}
      className="text-slate-500 border rounded-md relative overflow-hidden"
    >
      <Grid container maxWidth="lg" className="bg-white">
        <Box className="h-20 w-32 bg-primary-blue flex justify-center items-end absolute z-10 -rotate-45 -left-16 -top-10 pb-2">
          <AiFillStar className="text-white h-5 w-5 " />
        </Box>
        <Grid item container className="lg:items-center px-4 lg:px-16 py-5 space-y-4 lg:space-y-0">
          <Grid item xs={12} md={2} className="flex justify-center lg:block">
            <Box className="relative w-16 h-16 rounded-md overflow-hidden">
              <Typography className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {companyInitials} 
              </Typography>
              <Image
                src={logoImage}
                alt={jobTitle}
                height="0"
                width="0"
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="space-y-4 lg:space-y-0">
            <Typography className="text-lg" variant="h6">
              {jobTitle}
            </Typography>
            <Typography variant="body2">{company}</Typography>
          </Grid>
          <Grid item xs={12} md={2} justifySelf={"end"}>
            {/* <GVIcon /> */}
            <Typography variant="body2">{location}</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body2">{salaryRange}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            className="flex flex-wrap space-x-2 lg:w-min"
          >
            {tags.map((tag, index) => {
              if (tag === "Full Time") {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    className="my-1 bg-green-200 bg-opacity-70 text-green-700"
                  />
                );
              }else if(tag === "Part Time") {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    className="my-1 bg-red-200 bg-opacity-70 text-red-700"
                  />
                )
              }else if(tag === "Freelancer") {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    className="my-1 bg-violet-200 bg-opacity-70 text-violet-700"
                  />
                )
              }else if(tag === "Private") {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    className="my-1 bg-blue-200 bg-opacity-70 text-blue-700"
                  />
                );
              }
                return (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    className="my-1  bg-orange-200 bg-opacity-70 text-orange-700"
                  />
                );
            })}
          </Grid>
        </Grid>

        <Grid
          item
          container
          className="lg:flex lg:justify-between lg:items-center bg-gray-100 lg:px-16 py-2 px-4"
        >
          <Grid item xs={12} md={6}>
            <Typography className="whitespace-nowrap" variant="body2">
              Experience: {experience}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="lg:flex lg:justify-end ">
            <Button endIcon={<MdKeyboardDoubleArrowRight />} className="whitespace-nowrap capitalize text-slate-500 text-md p-0 font-normal tracking-wide" variant="text">Apply Now</Button>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default SingleJobCard;
