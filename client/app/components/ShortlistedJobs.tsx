import React, { useState } from "react";
import { Container, Tabs, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionTitles from "./SectionTitles";
import CustomTab from "@/ui/CustomTab";
import CustomTabPanel from "@/ui/CustomTabPanel";


function a11yProps(index: number): { [key: string]: string } {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ShortlistedJobs = () => {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <SectionTitles
        title="New & Random Jobs"
        except="Post a job to tell us your project. We'll match you with the right freelancers for it"
      />

      <Tabs
        value={value}
        onChange={handleChangeTab}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            bgcolor: "transparent",
          },
        }}
        orientation={matches ? "horizontal" : "vertical"}
        className={`shadow-md ${!matches ? "w-full" : "w-min"} mx-auto rounded-lg p-2 bg-white`}
        centered
      >
        <CustomTab label="Recent Jobs" {...a11yProps(0)} />
        <CustomTab label="Featured Jobs" {...a11yProps(1)} />
        <CustomTab label="Freelancer" {...a11yProps(2)} />
        <CustomTab label="Part Time" {...a11yProps(3)} />
        <CustomTab label="Full Time" {...a11yProps(4)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <span className="text-black">Content 1</span>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Content 2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Content 3
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Content 4
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Content 5
      </CustomTabPanel>
    </Container>
  );
};

export default ShortlistedJobs;
