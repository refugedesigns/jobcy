"use client"

import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import JobCategories from "./components/JobCategories";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Box className="bg-[url('/images/home/img-01.png')] bg-cover bg-bottom w-full min-h-[750px] bg-[#6055f2] relative pb-16">
        <HeroSection />
        <Box className="bg-white w-full h-48 absolute -bottom-24 z-10 overflow-hidden -skew-y-[3deg]" />
      </Box>
     
        <JobCategories />
    </main>
  );
}
