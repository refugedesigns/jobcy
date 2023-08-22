import React, { useState, useEffect, ChangeEvent } from "react";
import Select, { GroupBase } from "react-select";
import {
  Box,
  Button,
  FormControl,
  Input,
  Typography,
  Container,
  useMediaQuery,
  Divider
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

interface Options {
  readonly value: string;
  readonly label: string;
}

const options: readonly Options[] = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
  { value: "Option 4", label: "Option 4" },
];



const HeroSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);

  return (
    <Container className="mt-40 sm:px-10 mb-20">
      <Typography
        variant="h2"
        className="text-white text-4xl text-center max-w-md mx-auto font-bold md:max-w-lg lg:text-5xl lg:max-w-2xl"
      >
        Search Between More Than <span className="text-slate-400">10,000+</span>{" "}
        Open Jobs
      </Typography>
      <Typography
        variant="body2"
        className="py-4 text-center mx-auto w-full md:text-lg text-white"
      >
        Find jobs, create trackable resumes and enrich your applications
      </Typography>
      <Box className="space-y-4 lg:flex lg:space-y-0 lg:bg-whit pt-10 pb-4">
        <Input
          name="company"
          id="company"
          placeholder="Job, Company name..."
          startAdornment={
            <BiBriefcaseAlt2 className="px-1 h-7 w-7 text-primary-blue dark:text-slate-600" />
          }
          className="bg-white rounded-md lg:flex-1 lg:rounded-tr-none lg:rounded-br-none py-3 lg:py-0"
          fullWidth
          variant="outlined"
          disableUnderline
          size="medium"
        />
        <Divider orientation="vertical" className="hidden lg:block" />
        <Box className="relative lg:flex-1">
          <CiLocationOn className="absolute z-10 top-1/2 transform -translate-y-1/2 h-[2.3rem] w-[2.3rem] px-2 text-primary-blue dark:text-slate-600" />
          <Select
            className="basic-single lg:flex-1 lg:rounded-none"
            classNamePrefix="select"
            defaultValue={"Option 1"}
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="color"
            options={options}
            styles={{
              control: (provided) => ({
                ...provided,
                border: "none",
                outline: "none",
                boxShadow: "none",
                paddingLeft: 16,
                "&:hover": {
                  cursor: "pointer",
                },
              }),
              container: (base) => ({
                ...base,
                border: matches ? "none" : "1px solid gray",
                padding: 8,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                backgroundColor: "white",
                "&:hover": {
                  cursor: "pointer",
                },
              }),
            }}
          />
        </Box>
        <Divider orientation="vertical" className="hidden lg:block" />
        <Box className="relative lg:flex-1 hover:cursor-pointer">
          <AiOutlineBook className="absolute z-10 top-1/2 transform -translate-y-1/2 h-[2.2rem] w-[2.2rem] px-2 text-primary-blue dark:text-slate-600" />
          <Select
            className="basic-single lg:flex-1 lg:rounded-none"
            classNamePrefix="select"
            defaultValue={"Option 1"}
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="color"
            options={options}
            styles={{
              control: (provided) => ({
                ...provided,
                border: "none",
                outline: "none",
                boxShadow: "none",
                paddingLeft: 16,
                "&:hover": {
                  cursor: "pointer",
                },
              }),
              container: (base) => ({
                ...base,
                border: matches ? "none" : "1px solid gray",
                padding: 8,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 5,
                backgroundColor: "white",
                "&:hover": {
                  cursor: "pointer",
                },
              }),
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          size="large"
          className="bg-primary-blue dark:bg-slate-800 dark:focus:bg-slate-800 dark:hover:bg-slate-700  dark:text-white w-full lg:flex-1 py-4 lg:rounded-bl-none lg:rounded-tl-none"
        >
          Find Job
        </Button>
      </Box>
      <Box className="flex justify-center items-center w-full flex-wrap text-sm">
        <Box className="flex justify-center items-center">
          <MdOutlineDiscount className="h-6 w-6 text-orange-200" />
          <Typography className="whitespace-nowrap text-white">
            Trending Keywords:
          </Typography>
        </Box>
          {["Design", "Development", "Manager", "Senior"].map(
            (keyword, index) => (
              <Link className="mx-2 text-gray-200" href="#" key={index}>
                {keyword},
              </Link>
            )
          )}
      </Box>
    </Container>
  );
};

export default HeroSection;
