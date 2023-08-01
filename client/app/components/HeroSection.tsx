import React, { useState, useEffect, ChangeEvent } from "react";
import Select, { GroupBase } from "react-select";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Container
} from "@mui/material";
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
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

  return (
    <Container className="bg-[/images/home/img-01.png] w-full mt-40">
      <Typography variant="h2" className="text-white text-4xl text-center max-w-md mx-auto font-bold">
        Search Between More Than <span className="text-slate-400">10,000+</span>{" "}
        Open Jobs
      </Typography>
      <Typography variant="body2" className="py-4 text-center mx-auto w-full">
        Find jobs, create trackable resumes and enrich your applications
      </Typography>
      <Box className="space-y-4 lg:flex">
        <TextField
          name="company"
          id="company"
          placeholder="Job, Company name..."
          InputProps={{ startAdornment: <BiBriefcaseAlt2 /> }}
          className="f"
          fullWidth
        />
        <Select
          className="basic-single"
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
              border: "1px solid gray",
              padding: 8,
              borderRadius: 5,
              backgroundColor: "white",
            }),
          }}
        />
        <Select
          className="basic-single"
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
              border: "1px solid gray",
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
          className="bg-primary-blue  dark:text-white w-full py-4"
        >
          Find Job
        </Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
