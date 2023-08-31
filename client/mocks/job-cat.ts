import jobs from "./job-data.json";

function featuredJobs(): Job[] {
  return jobs.slice(0, 6);
}

function freelanceJobs() {
  const freelance = jobs.filter((job) => job.tags.includes("Freelancer"));
  return freelance;
}

function fulltimeJobs() {
  const fulltime = jobs.filter((job) => job.tags.includes("Full Time"));
  return fulltime;
}

function parttimeJobs() {
  const parttime = jobs.filter((job) => job.tags.includes("Part Time"));
  return parttime;
}

function recentJobs() {
  const recent = jobs.slice(6, 12);
  return recent;
}

export { featuredJobs, freelanceJobs, fulltimeJobs, parttimeJobs, recentJobs };
