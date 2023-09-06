import jobs from "./job-data.json";

/**
 * Returns an array of the first four featured jobs.
 *
 * @return {Job[]} An array of the first four featured jobs.
 */
function featuredJobs(): Job[] {
  return jobs.slice(0, 4);
}

/**
 * Returns an array of the first four freelance jobs from the list of all jobs.
 *
 * @return {Job[]} An array of the first four freelance jobs.
 */
function freelanceJobs(): Job[] {
  const freelance = jobs.filter((job) => job.tags.includes("Freelancer")).slice(0, 4);
  return freelance;
}

/**
 * Retrieves a list of full-time jobs.
 *
 * @return {Job[]} The list of full-time jobs.
 */
function fulltimeJobs(): Job[] {
  const fulltime = jobs.filter((job) => job.tags.includes("Full Time")).slice(0, 4);
  return fulltime;
}

function parttimeJobs(): Job[] {
  const parttime = jobs.filter((job) => job.tags.includes("Part Time")).slice(0, 4);
  return parttime;
}

/**
 * Retrieves the most recent jobs from the list of all jobs.
 *
 * @return {Job[]} An array of the most recent jobs.
 */
function recentJobs(): Job[] {
  const recent = jobs.slice(6, 11);
  return recent;
}

export { featuredJobs, freelanceJobs, fulltimeJobs, parttimeJobs, recentJobs };
