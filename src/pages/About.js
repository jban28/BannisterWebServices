import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const About = () => {
  const experience = [
    {
      title: "Developer",
      organisation: "Bannister Web Services",
      type: "Volunteer",
      dates: "March 2023 - Present",
      skills: [
        "Developed websites and applications on a not-for-profit basis for a variety of clients",
        "Gained experience with languages including HTML, CSS, Javascript, Python, and C++",
        "Made use of libraries and frameworks including Vue JS, React JS, Flask and Bootstrap",
        "Used AWS services including Elastic Beanstalk, Amplify, Route 53, S3 and EC2",
        "Used Git and GitHub for version control",
        "Used VS Code and WSL to write programs"
      ]
    },
    {
      title: "Event Organiser",
      organisation: "Manchester 24 Hour Run Against Homelessness",
      dates: "November 2019 - Present",
      type: "Volunteer",
      skills: [
        "Co-founded the event with another member of Run Wild Manchester in 2019, raising over £3000 in the first year and over £10,000 in 2022",
        "Coordinated the promotion of the event to runners around Manchester through the event website and social media pages",
        "Coordinated the team of volunteer run leaders to cover the full 24 hours in 30 minute blocks"
      ]
    },
    {
      title: "Sales Associate",
      organisation: "Ellis Brigham Mountain Sports",
      type: "Employed",
      dates: "June 2021 - June 2023",
      skills: [
        "Worked part time through the final year of my degree, switching to full time after graduation, all at the Deansgate store",
        "Provided advice to customers on specialist outdoor equipment used for activities such as mountaineering, rock climbing, skiing and trail running",
        "Received training in the bio mechanics associated with the fitting of ski boots and other footwear",
        "Assisted with training less experienced staff when required"
      ]
    },
    {
      title: "Event Safety Steward",
      organisation: "Showsec International - Manchester",
      type: "Employed",
      dates: "August 2019 - October 2022",
      skills: [
        "Worked part time at a variety of venues from my second year at university until I graduated",
        "Completed a Level 2 Award in Front of Stage Pit Barrier Operations",
        "Managed the densely packed crowds in the front rows at concerts, including  handling of crowd surfers at the front of stage pit barrier", 
        "Handled challenging customer service situations often involving intoxicated or aggressive customers including cases of fighting, harassment, and substance misuse",
      ]
    },
    {
      title: "Student",
      organisation: "University of Manchester",
      type: "Student",
      dates: "September 2018 - June 2022",
      skills: [
        "Graduated as a Master of Physics (1st Class with honours)",
        "Completed a final-year research project in the use of artificial intelligence for predicting long term outcomes of radiotherapy",
        "Specialised in theory modules relating to medical imaging, medical physics and laser physics",
        "Completed numerous practical laboratory experiments, involving extensive statistical analysis using python and frequent use of specialist equipment",
      ]
    },
    {
      title: "Various Roles",
      organisation: "Run Wild Manchester",
      dates: "September 2019 - June 2022",
      type: "Volunteer",
      skills: [
        "Volunteered as vice chair of the society for 1 year and as chair for the following 2 years",
        "Organised weekly runs for over 100 participants of all abilities, as well as additional social events every 4-6 weeks",
        "Coordinated a group of 35 volunteers to lead runs, with extensive use of google sheets and google forms to automatically assign leaders to groups as fairly as possible throughout the year",
        "Communicated with the students union and university to ensure all club events and activities ran smoothly and according to the society's rules",
        "Oversaw the clubs social media presence to advertise to new members and publish information about events",
      ]
    }
  ]

  return (
    <>
      <section>
        <Container fluid>
          <Card className="card-cv">
            <Card.Body>
              I am a recent Physics graduate looking to begin a career in web development. I am currently working on a voluntary basis to improve my skills through a variety of small projects. I have previously been employed in high-pressure customer facing environments requiring good communication skills. At University I took a leading role in a volunteer run society and co-founded an annual charity event, which I remain heavily involved with. I spend most of my spare time outside, enjoying activities such as running, hiking and mountain biking.
            </Card.Body>
          </Card>
        </Container>
      </section>

      <section>
        <div className="bg-theme heading-bar"><h1>Employment and Experience</h1></div>
        <Container fluid>
          {experience.map(
            (job) => (
              <Card className="card-cv">
                <Card.Body>
                  <Card.Title>{job.title} at {job.organisation}</Card.Title>
                  <Card.Subtitle>{job.type} {job.dates}</Card.Subtitle>
                  <Card.Text as="ul">
                      {job.skills.map((skill) => <li>{skill}</li>)}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )}
        </Container>
      </section>
    </>
  );
};

export default About;