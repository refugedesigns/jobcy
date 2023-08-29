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
        <Grid item container className="lg:items-center lg:px-16 py-5">
          <Grid item xs={12} lg={2} className="relative ">
            <Box className="relative w-20 h-20 rounded-md overflow-hidden">
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
          <Grid item xs={12} lg={4}>
            <Typography className="text-lg" variant="h6">
              {jobTitle}
            </Typography>
            <Typography variant="body2">{company}</Typography>
          </Grid>
          <Grid item xs={12} lg={2} justifySelf={"end"}>
            {/* <GVIcon /> */}
            <Typography variant="body2">{location}</Typography>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Typography variant="body2">{salaryRange}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={2}
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
          className="flex justify-between items-center bg-gray-100 px-16 py-2"
        >
          <Grid item xs={6}>
            <Typography variant="body2">
              Experience: {experience} years
            </Typography>
          </Grid>
          <Grid item xs={6} className="flex justify-end ">
            <Button variant="text">Apply Now</Button>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default SingleJobCard;
