"use client"

import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import JobCategories from "./components/JobCategories";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Box className="bg-[url('/images/home/img-01.png')] bg-cover bg-bottom w-full min-h-[750px] bg-[#6055f2] dark:bg-slate-600 relative pb-40">
        <HeroSection />
        <Box className="bg-white w-full h-48 absolute -bottom-28 z-10 overflow-hidden -skew-y-[2.5deg] lg:-skew-y-[4deg]" />
      </Box>
     
        <JobCategories />
    </main>
  );
}
