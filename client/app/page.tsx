"use client"

import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import JobCategories from "./components/JobCategories";
import ShortlistedJobs from "./components/ShortlistedJobs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <Box className="bg-[url('/images/home/img-01.png')] bg-cover bg-bottom w-full min-h-[750px] bg-[#6055f2] dark:bg-slate-600 relative pb-32">
        <HeroSection />
        <Box className="bg-white w-full h-48 absolute -bottom-28 overflow-hidden -skew-y-[2.5deg] lg:-skew-y-[4deg]" />
      </Box>
      <Box className="z-20 w-full">
        <JobCategories />
      </Box>
      <Box className="bg-gray-100 w-full bg-opacity-30 my-10 py-20">
        <ShortlistedJobs />
      </Box>
    </main>
  );
}
