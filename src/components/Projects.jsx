import React from "react";
import Food from "./images/Food-order.png";
import Netflix from "./images/Netflix.png";
import Rent from "./images/Rent.png";
import Retail from "./images/RetailX.png";
import unemployment from "./images/Unemployment.png";

function Projects() {
  return (
    <div>
      <div id="projects" class="projects">
        <h1>Projects</h1>
      </div>
      <div class="project1">
        <div class="project">
          <div className="box1">
            <h2>
              <span class="span">
                Unemployment-Analysis (
                <a href="https://github.com/SrigadaAkshayKumar/Unemployment-Analysis">
                  Git-hub
                </a>
                )
              </span>
              :
            </h2>
            <img src={unemployment} alt="images" />
          </div>
          <div className="box2">
            <p>
              I conducted an Unemployment Analysis project where I utilized data
              science techniques to analyze trends and key factors affecting
              unemployment. The project involved data collection, cleaning, and
              exploratory data analysis (EDA). I developed predictive models to
              forecast future unemployment rates and visualized the results
              through interactive charts.
            </p>
            <h3>Technologies Used :</h3>
            <p>
              pandas, Numpy, Matplotlib, Seaborn, scikit-learn, Jupyter Notebook
              and Power bi
            </p>
          </div>
        </div>
        <div class="project">
          <div className="box1">
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
          </div>
          <div className="box2">
            <p>
              The RetailX Sales Analysis project, offers insights into retail
              sales data. Through data analysis and visualization, it explores
              sales performance, customer behavior, and trends.this project
              showcases my journey in understanding and applying analytics
              techniques to real-world datasets.
            </p>
            <h3>Technologies and Tools Used :</h3>
            <p>
              pandas, Numpy, Matplotlib, Seaborn, scikit-learn, Jupyter Notebook
              and Power bi
            </p>
          </div>
        </div>
        <div class="project">
          <div className="box1">
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
          </div>
          <div className="box2">
            <p>
              To Discover the world of React development with my first project
              Netflix clone built entirely with React.js. Dive into the frontend
              development journey as I recreate the user interface of the
              popular streaming platform.
            </p>
            <h3>Technologies and Tools Used :</h3>
            <p>React js, Html, CSS, JavaScript, Node js and VS Code</p>
          </div>
        </div>
        <div class="project">
          <div className="box1">
            <h2>
              <span class="span">
                Rent-Hub (
                <a href="https://github.com/Akshayak8/Rent-Hub.git">Git-hub</a>)
              </span>
              :
            </h2>
            <img src={Rent} alt="images" />
          </div>
          <div className="box2">
            <p>
              I have developed Rent-Hub, a one-stop platform for all your rental
              needs. Browse, compare, and choose platform. Simplify your rental
              experience with Rent-Hub.
            </p>
            <h3>Technologies and Tools Used :</h3>
            <p>
              React js, Html, CSS, JavaScript, Bootstrap, Node js and VS Code
            </p>
          </div>
        </div>
        <div class="project">
          <div className="box1">
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
          </div>
          <div className="box2">
            <p>
              I independently developed an online food ordering webpage. The
              project involved creating a user-friendly interface for customers.
              I implemented responsive design principles to ensure viewing
              across different devices.
            </p>
            <h3>Technologies and Tools Used :</h3>
            <p>Html, CSS, JavaScript and VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
