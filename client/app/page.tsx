"use client"

import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import JobCategories from "./components/JobCategories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Box className="bg-[url('/images/home/img-01.png')] bg-cover bg-center w-full min-h-[100vh] bg-[#6055f2] relative">
        <HeroSection />
        <Box className="bg-white w-full h-32 absolute -bottom-16 z-10 overflow-hidden -skew-y-3" />
      </Box>
     
        <JobCategories />
    </main>
  );
}
