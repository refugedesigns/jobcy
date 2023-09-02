import jobs from "./job-data.json";

function featuredJobs(): Job[] {
  return jobs.slice(0, 4);
}

function freelanceJobs(): Job[] {
  const freelance = jobs.filter((job) => job.tags.includes("Freelancer")).slice(0, 4);
  return freelance;
}

function fulltimeJobs(): Job[] {
  const fulltime = jobs.filter((job) => job.tags.includes("Full Time")).slice(0, 4);
  return fulltime;
}

function parttimeJobs(): Job[] {
  const parttime = jobs.filter((job) => job.tags.includes("Part Time")).slice(0, 4);
  return parttime;
}

function recentJobs(): Job[] {
  const recent = jobs.slice(6, 11);
  return recent;
}

export { featuredJobs, freelanceJobs, fulltimeJobs, parttimeJobs, recentJobs };
