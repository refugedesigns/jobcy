import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import getAllProcess from "@/mocks/process";
import { StepConnector } from "@mui/material";

type Props = {};

const Process = (props: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getAllProcess();

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  return (
    <Grid container maxWidth="lg" className="mx-auto px-20 lg:px-0 my-16 space-y-8 lg:space-y-0">
      <Grid item lg={4}>
        <Box className="text-slate-800">
          <Typography variant="h4" className="font-bold">
            How It Work
          </Typography>
          <Typography variant="body2" className="py-4 lg:text-[16px] max-w-[70%] lg:max-w-max">
            Post a job to tell us about your project. We'll quickly match you
            with the right freelancers.
          </Typography>
        </Box>
        <Stepper
          nonLinear
          activeStep={activeStep}
          connector={<StepConnector sx={{ height: "28px" }}  />}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={index} expanded>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <Typography className="">{step.label}</Typography>
              </StepButton>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <Typography
                  variant="body2"
                  className="text-black w-[70%] lg:w-full"
                >
                  {step.content}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item lg={8} className="w-full">
        <Box className="w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] mx-auto">
          {" "}
          <Image
            src={`/images/process-${activeStep + 1}.png`}
            alt={`${steps[activeStep].label}`}
            height="0"
            width="0"
            sizes="100vw"
            className="w-full h-auto object-contain mx-auto"
          />{" "}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Process;
