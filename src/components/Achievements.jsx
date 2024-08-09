import React from "react";
import Hackathon1 from "./images/Hackathon1.jpg";

function Achievements() {
  return (
    <div>
      <div class="project1">
        <div class="project">
          <div className="box1">
            <h2>
              <span class="span">
                Secured 3rd Position in Hackathon Conducted by Atharva Data
                Science Community(ADSC)
              </span>
              :
            </h2>
            <img src={Hackathon1} alt="images" />
          </div>
          <div className="box2">
            <p>
              Developed a personalized chatbot leveraging ChatGPT 4.0 during a
              hackathon. The chatbot is designed to provide tailored responses
              based on user inputs, demonstrating advanced natural language
              understanding and adaptability to various conversational contexts.
              It showcases the ability to engage users interactively and
              efficiently, making it suitable for customer support, personal
              assistance, and more.
            </p>
            <h3>Technologies Used :</h3>
            <p>Chat-Gpt 4.O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
