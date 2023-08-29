const {faker} = require("@faker-js/faker")
const fs = require("fs")
const path = require("path")
const _ = require("lodash")

tags = ["Part Time", "Full Time", "Private", "Urgent", "Freelancer"]

function createRandomJob() {
    let newTags = _.sampleSize(tags, faker.number.int({min: 1, max: 3}))
    const imageWithText = faker.image.dataUri({
      width: 100,
      height: 100,
      color: faker.color.rgb(),
    });
    const logoImage = imageWithText.replace(
      "3Ctext%20x%3D%2250%22%20y%3D%2250%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E100x100%3C%2Ftext%3E",
      ""
    );
    const company = faker.company.name()
    const compArray = company.split(" ")
    let abbr = "";
    let regExp = /[a-z]/i;
    for(i = 0; i < compArray.length; i++){
      const firstLetter = compArray[i].charAt(0)
      if(regExp.test(firstLetter) && compArray[i] !== "and"){
        abbr += compArray[i].charAt(0);
      }
    }

    const tagIntersection = _.intersection(newTags, ["Full Time", "Part Time"])

    if(tagIntersection.length === 2){
      newTags = _.without(newTags, _.sample(["Full Time", "Part Time"]))
    }



    return {
        logoImage: logoImage,
        jobTitle: faker.person.jobTitle(),
        company: company,
        companyInitials: abbr,
        location: faker.location.city(),
        salaryRange: `$${faker.number.int({min: 800, max: 1500})} - ${faker.number.int({min: 2000, max: 8000})}k`,
        experience: `${faker.number.int({min: 1, max: 2})} - ${faker.number.int({min: 3, max: 5})} years`,
        tags: newTags

}
}

const jobs = faker.helpers.multiple(createRandomJob, {
    count: 100
})

const jsonString = JSON.stringify(jobs)

fs.writeFile(path.join(__dirname, "job-data.json"), jsonString, (err) => {
   if(err) {
    console.error(err); 
    return
  }
   console.log("done")
})