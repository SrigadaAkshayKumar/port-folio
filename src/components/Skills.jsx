import React from "react";

function Skills() {
  return (
    <div>
      <div id="skill-heading" class="skill-heading">
        <h1>Skills</h1>
      </div>
      <div class="skills">
        <div class="tech-skills">
          <h1>
            <span class="span">Technical Skills</span> :
          </h1>
          <p>
            C<br />
            Python
            <br />
            Java
            <br />
            JavaScript
          </p>
          <h2>Web Development:</h2>
          <p>
            - Frontend: HTML, CSS, JavaScript <br />
            - Frameworks: Bootstrap,React js
            <br />- Backend: Django, SQL
          </p>
        </div>
        <div class="soft-skills">
          <h1>
            <span class="span">Soft Skills</span> :
          </h1>
          <p>
            - Communication Skills
            <br />
            - Teamwork <br />
            - Leadership <br />
            - Problem-Solving <br />- Time Management
          </p>
        </div>
      </div>
      <div class="certificate">
        <h3>Certifications</h3>
      </div>
      <div class="certifi">
        <div class="certifi-btn">
          <a href="https://drive.google.com/file/d/1UMRuwWENSFff6T8KJxi2BfgFEUBzAq4y/view?usp=sharing ">
            Python
          </a>
        </div>
        <div class="certifi-btn">
          <a href="https://www.udemy.com/certificate/UC-01a61fff-fe25-456d-b9f2-0e52e2f74a5d/">
            Html5
          </a>
        </div>
        <div class="certifi-btn">
          <a href="https://www.udemy.com/certificate/UC-547450c2-7141-4078-aa65-5ab5a2f7fc9b/">
            Frontent development
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
