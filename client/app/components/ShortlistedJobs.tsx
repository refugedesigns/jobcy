import React, { useState } from "react";
import { Container, Tabs, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionTitles from "./SectionTitles";
import CustomTab from "@/ui/CustomTab";
import CustomTabPanel from "@/ui/CustomTabPanel";
import { featuredJobs, freelanceJobs, recentJobs, fulltimeJobs, parttimeJobs } from "@/mocks/job-cat";
import SingleJobCard from "./SingleJobCard";


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

  const featured = featuredJobs();
  const recent = recentJobs();
  const fulltime = fulltimeJobs();
  const parttime = parttimeJobs();
  const freelance = freelanceJobs();

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
        className={`shadow-md ${
          !matches ? "w-full" : "w-min"
        } mx-auto rounded-lg p-2 bg-white`}
        centered
      >
        <CustomTab label="Recent Jobs" {...a11yProps(0)} />
        <CustomTab label="Featured Jobs" {...a11yProps(1)} />
        <CustomTab label="Freelancer" {...a11yProps(2)} />
        <CustomTab label="Part Time" {...a11yProps(3)} />
        <CustomTab label="Full Time" {...a11yProps(4)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Box className="space-y-8">
          {recent.map((job: Job, index: number) => (
            <SingleJobCard
              key={index}
              logoImage={job.logoImage}
              jobTitle={job.jobTitle}
              company={job.company}
              companyInitials={job.companyInitials}
              location={job.location}
              salaryRange={job.salaryRange}
              experience={job.experience}
              tags={job.tags}
            />
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box className="space-y-8">
          {featured.map((job: Job, index: number) => (
            <SingleJobCard
              key={index}
              logoImage={job.logoImage}
              jobTitle={job.jobTitle}
              company={job.company}
              companyInitials={job.companyInitials}
              location={job.location}
              salaryRange={job.salaryRange}
              experience={job.experience}
              tags={job.tags}
            />
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box className="space-y-8">
          {freelance.map((job: Job, index: number) => (
            <SingleJobCard
              key={index}
              logoImage={job.logoImage}
              jobTitle={job.jobTitle}
              company={job.company}
              companyInitials={job.companyInitials}
              location={job.location}
              salaryRange={job.salaryRange}
              experience={job.experience}
              tags={job.tags}
            />
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box className="space-y-8">
          {fulltime.map((job: Job, index: number) => (
            <SingleJobCard
              key={index}
              logoImage={job.logoImage}
              jobTitle={job.jobTitle}
              company={job.company}
              companyInitials={job.companyInitials}
              location={job.location}
              salaryRange={job.salaryRange}
              experience={job.experience}
              tags={job.tags}
            />
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box className="space-y-8">
          {parttime.map((job: Job, index: number) => (
            <SingleJobCard
              key={index}
              logoImage={job.logoImage}
              jobTitle={job.jobTitle}
              company={job.company}
              companyInitials={job.companyInitials}
              location={job.location}
              salaryRange={job.salaryRange}
              experience={job.experience}
              tags={job.tags}
            />
          ))}
        </Box>
      </CustomTabPanel>
    </Container>
  );
};

export default ShortlistedJobs;
