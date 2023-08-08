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

interface Options  {
  readonly value: string;
  readonly label: string;
};

const options: readonly Options[] = [
  {value: "Option 1", label: "Option 1"},
  {value: "Option 2", label: "Option 2"},
  {value: "Option 3", label: "Option 3"},
  {value: "Option 4", label: "Option 4"},
]

const HeroSection = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("lg"))
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

  return (
    <Container className="mt-40 sm:px-10 mb-20">
      <Typography
        variant="h2"
        className="text-white text-4xl text-center max-w-md mx-auto font-bold"
      >
        Search Between More Than <span className="text-slate-400">10,000+</span>{" "}
        Open Jobs
      </Typography>
      <Typography variant="body2" className="py-4 text-center mx-auto w-full">
        Find jobs, create trackable resumes and enrich your applications
      </Typography>
      <Box className="space-y-4 lg:flex lg:space-y-0 lg:bg-whit">
        <Input
          name="company"
          id="company"
          placeholder="Job, Company name..."
          startAdornment={<BiBriefcaseAlt2 className="px-1 h-8 w-8" />}
          className="bg-white rounded-md lg:flex-1 lg:rounded-tr-none lg:rounded-br-none py-3 lg:py-0"
          fullWidth
          variant="outlined"
          disableUnderline
          size="medium"
        />
        <Divider orientation="vertical" className="hidden lg:block" />
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
            }),
            container: (base) => ({
              ...base,
              border: matches ? "none" : "1px solid gray",
              padding: 8,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 5,
              backgroundColor: "white",
            }),
          }}
        />
        <Divider orientation="vertical" className="hidden lg:block" />
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
            }),
            container: (base) => ({
              ...base,
              border: matches ? "none" : "1px solid gray",
              padding: 8,
              borderRadius: 5,
              backgroundColor: "white",
            }),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          size="large"
          className="bg-primary-blue  dark:text-white w-full lg:flex-1 py-4"
        >
          Find Job
        </Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
