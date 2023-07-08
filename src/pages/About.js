const About = () => {
  let employment = [
    {
      title: "Sales Associate",
      employer: "Ellis Brigham Mountain Sports",
      dates: "June 2021 to June 2023",
      skills: [
        "point 1",
        "point 2"
      ]
    }
  ]
  return (
    <>
      <h1>Personal Profile</h1>
      <p>This is where I write about me a bit This is where I write about me a bit This is where I write about me a bit This is where I write about me a bitThis is where I write about me a bitThis is where I write about me a bitThis is where I write about me a bitThis is where I write about me a bitThis is where I write about me a bitThis is where I write about me a bit</p>
      <h1>CV</h1>
      <h2>Employment and Volunteer Roles</h2>
      {employment.map(
        (job) => (
          <>
            <h3>{job.title} at {job.employer}</h3>
            <h4>{job.dates}</h4>
            <ul>
              {job.skills.map((skill) => <li>{skill}</li>)}
            </ul>
          </>
        )
      )}

      <h2>Education</h2>
      <h1>Other Interests</h1>
    </>
  );
};

export default About;