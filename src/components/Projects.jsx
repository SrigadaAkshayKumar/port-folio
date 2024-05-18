import React from "react";
import Food from "./images/Food-order.png";
import Netflix from "./images/Netflix.png";
import Rent from "./images/Rent.png";
import Retail from "./images/RetailX.png";

function Projects() {
  return (
    <div>
      <div id="projects" class="projects">
        <h1>Projects</h1>
      </div>
      <div class="project1">
        <div class="project">
          <h2>
            <span class="span">
              Food Ordering website (
              <a href="https://github.com/Akshayak8/Online-food-Ordering-web">
                Git-hub
              </a>
              )
            </span>
            :
          </h2>
          <img src={Food} alt="images" />
          <p>
            I independently developed an online food ordering webpage. The
            project involved creating a user-friendly interface for customers. I
            implemented responsive design principles to ensure viewing across
            different devices.
          </p>
          <h3>Technologies Used :</h3>
          <p>Html, CSS and JavaScript</p>
        </div>
        <div class="project">
          <h2>
            <span class="span">
              Netflix-Clone (
              <a href="https://github.com/Akshayak8/Netflix-Clone.git">
                Git-hub
              </a>
              )
            </span>
            :
          </h2>
          <img src={Netflix} alt="images" />
          <p>
            To Discover the world of React development with my first project
            Netflix clone built entirely with React.js. Dive into the frontend
            development journey as I recreate the user interface of the popular
            streaming platform.
          </p>
          <h3>Technologies Used :</h3>
          <p>React js, Node js, Html, CSS and JavaScript</p>
        </div>
        <div class="project">
          <h2>
            <span class="span">
              Rent-Hub (
              <a href="https://github.com/Akshayak8/Rent-Hub.git">Git-hub</a>)
            </span>
            :
          </h2>
          <img src={Rent} alt="images" />
          <p>
            I have developed Rent-Hub, a one-stop platform for all your rental
            needs. Browse, compare, and choose platform. Simplify your rental
            experience with Rent-Hub.
          </p>
          <h3>Technologies Used :</h3>
          <p>React js, Node js, Html, CSS, JavaScript and Bootstrap</p>
        </div>
        <div class="project">
          <h2>
            <span class="span">
              RetailX-Sales-Analysis (
              <a href="https://github.com/Akshayak8/RetailX-Sales-Analysis.git">
                Git-hub
              </a>
              )
            </span>
            :
          </h2>
          <img src={Retail} alt="images" />
          <p>
            The RetailX Sales Analysis project, offers insights into retail
            sales data. Through data analysis and visualization, it explores
            sales performance, customer behavior, and trends.this project
            showcases my journey in understanding and applying analytics
            techniques to real-world datasets.
          </p>
          <h3>Technologies Used :</h3>
          <p>Jupyter Notebook, Power bi, Data Analysis</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
