import "./About.css";
// import fsd from "../assets/certificate/FSD - Overall.png"
// import module1 from "../assets/certificate/Module 1 - HTML5.png"
// import module2 from "../assets/certificate/Module 2 - CSS3.png"
// import module3 from "../assets/certificate/Module 3 - Bootstrap.png"
// import module4 from "../assets/certificate/Module 4 - Javascript.png"
// import module5 from "../assets/certificate/Module 5 - DS.png"
// import module6 from "../assets/certificate/Module 6 -React JS.png"
// import module7 from "../assets/certificate/Module 7 -MySql.png"
// import module8 from "../assets/certificate/Module 8 - MongoDB.png"
// import module9 from "../assets/certificate/Module 9 -Node JS.png"
// import module10 from "../assets/certificate/Module 10 -AWS.png"

function About() {
  return (
    <>
      <div className="container ">
        <div>
          <h1 className="about-title mt-5">About</h1>
          <div>
            <p className="about-content">
              I Started off my self-learning journey with online tutorials
              Google, YouTube, etc and took a step further and Enrolled in the
              Fullstack web-developer Program bootcamp in{" "}
              <strong>GUVI IIT MADRAS</strong> which involved extensive
              programming and real world projects. In this camp I learned{" "}
              <strong>MERN</strong> Stack From Guvi to design and built with new
              features from Ideation to production, implementaition of
              wireframes and design flows in my web application. I take into
              consideration the user experience while writing reusable and
              efficlebt code I passionately combine Good design,Technology,and
              Innovation in all my PROJECT using{" "}
              <strong>React JS, Node, Express Js, MongoDB.</strong> <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h1 className="about-title">Education Level</h1>
            </div>
            <div>
              <p>
                <b>Full Stack Devoloping : (2022-Present)</b>
                <br />
                GUVI - IIT Madras - Chennai.
              </p>
            </div>
            <div>
              <p>
                <b>Bachelor's in Mechanical Engineering : (2013-2017)</b>
                <br />
                Annamalai University - Chidambaram.
              </p>
            </div>
            <div>
              <p>
                <b>Higher Secondary : (2011-2013)</b>
                <br />
                st Joseph's School - Cuddalore.
              </p>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div>
              <h1 className="about-title">Experience</h1>
            </div>
            <div>
              <p>
                <b>IT Recruiter : (December 2021 to January 2023)</b>
                <br />
                CelticBlue IT Services Pvt Ltd - Chennai.
              </p>
            </div>
            <div>
              <p>
                <b>Outlet Manager : (October 2020 to November 2021)</b>
                <br />
                Green Trends, Nolambur - Chennai.
              </p>
            </div>
            <div>
              <p>
                <b>Outlet Manager : (July 2018 to March 2020)</b>
                <br />
                Green Trends, Ramapuram - Chennai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
