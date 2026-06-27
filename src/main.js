import './style.css';
import { Game } from './modules/game.js';
import { CELL_SIZE } from './modules/constants.js';

document.querySelector('#app').innerHTML = `
<div id = "cont">
  <div id = "cont-left">
    <div id = "next-steps">
      <ul>
        <li>
          <a href="#" id="main-btn">
            🐟 Nam
          </a>
        </li> 
        <li>
          <a href="#" id="info-btn">
            🧊 Information
          </a>
        </li>
      </ul>
    </div>


    <section id="main">
      <p>Hi there, this is Nam. I am a currently a student at RMIT Hanoi. Click [📝Information]↗ for my CV.</p>
      <br>
      <h3>Contact Info</h3>
      <p>email: nguyenthanhhainam2007@gmail.com</p>
      <p>tel: +85 915321058</p>
      <br><br>
      <h3>Conway's Game of Life</h3>
      <p>[C] to clear canvas, [P] to pause, [R] to generate random pattern.</p>
    </section>

    <section id="info">
      <p>Click on each item for an extended description.</p> <br>
      <h3>Education</h3>
      <ul class = "drop-list">
        <li>
          <div class = "drop-btn">
            <p>A level</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li> General Paper: A </li>
            <li> Computing: A </li>
            <li> Mathetmatics: B </li>
            <li> Physics: B </li>
            <li> Project Work: Pass </li>
          </ul>
        </li>
        <li>
        <div class = "drop-btn">
          <p>IELTS</p>
          <p>2026</p>
        </div>
          <ul class = "drop-cont">
            <li>8.5 band</li>
          </ul>
        </li>
        <li>
          <div class = "drop-btn">
            <p>SAT</p>
            <p>2026</p>
          </div>
          <ul class = "drop-cont">
            <li>1490</li>
          </ul>
        </li>
      </ul>

      <br>
      <h3>Achievements</h3>
      <ul class = "drop-list">
        <li>
          <div class = "drop-btn">
            <p>Singapore Junior Biology Olympiad 2023 - Bronze Award</p>
            <p>2023</p>
          </div>
          <ul class = "drop-cont">
            <li>Awarded Bronze in a national biology competition for secondary school students (Sec 2--4, ages 14--16).</li>
          </ul>
        </li>
        
        <li>
          <div class = "drop-btn">
            <p>RoboroarZ Senior Category, Innovation award</p>
            <p>2024</p>
          </div>
          <ul class = "drop-cont">
            <li>A robotics compettition held in collaboration with Singapore University of Technology and Design (SUTD) for junior college students (ages 17-18) </li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Whitehacks</p>
            <p>2024</p>
          </div>
          <ul class = "drop-cont">
            <li>Represented School at a hacking compettition held by Sinapore Management University (SMU)</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Whitehacks</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Represented School at a hacking compettition held by Sinapore Management University (SMU)</li>
          </ul>
        </li>
      </ul>

      <br>
      <h3>Leadership and Management</h3>
      <ul class = "drop-list">
        <li>
          <div class = "drop-btn">
            <p>Economics Subject Representative</p>
            <p>2024-2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Class elected leadership</li>
            <li>Acted as class representative for the economics subject for two years, directly
            interfacing with the subject tutor in handling administrative matters and
            facilitating lessons</li>
          </ul>
        </li>
        
        <li>
          <div class = "drop-btn">
            <p>Maker’s Academy - Deputy Director of IMAD</p>
            <p>2024-2025</p>
          </div>
          <ul class = "drop-cont">
            <li>School Society Leadership</li>
            <li>Acted as the deputy director of the Interactive Making and Design department</li>
            <li>In charge working with student members and teachers to plan events and prepare materials for weekly sessions, school events and external events that the society was involved in.</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>CodeCare Initiative - Vice Chairperson for student led projects</p>
            <p>Feb – Apr 2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Maker's Academy External Event Management</li>
            <li>Co-led planning and execution of a 3-month program at a local community center to equip senior citizens with digital skills. Managed logistics, delegated responsibilities, and coordinated member contributions. Developed educational materials on identifying AI-generated misinformation and using AI tools for daily applications</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Completed 1 module on leadership</p>
            <p>May 2024</p>
          </div>
          <ul class = "drop-cont">
            <li>Participated in the training module for Tier 3 leaders focused on recognizing and helping peers showing signs of distress</li>
          </ul>
        </li>
      </ul>

      <br>
      <h3>Community Service Programs</h3>
      <ul class = "drop-list">
        <li>
          <div class = "drop-btn">
            <p>Mentoring Program with Northbrooks Secondary School</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>School Initiated</li>
            <li>Over the course of 3 months, students in the program taught International and Permanent Resident students at Northbrooks basic English to help them acclimate to their new education environment</li>
          </ul>
        </li>
        
        <li>
          <div class = "drop-btn">
            <p>CodeCare Initiative</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>School Initiated</li>
            <li>Acted as vice-president in the preparation of a program to equip seniors with digital skills at local community center</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>DigiTalk (Online Safety)</p>
            <p>2024</p>
          </div>
          <ul class = "drop-cont">
            <li>School Initiated</li>
            <li>Assisted in the preparation and running of an educational event for primary school students focused on online safety</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Orientation College Race: Digital Literacies Station</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>School Initiated</li>
            <li>Assisted in the preparation of a program to equip first year students with digital skills to recognize digital threats and make use of online platforms safely</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>JC1 Post-Orientation Digital Literacy Program</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>School Initiated</li>
            <li>Assisted in the preparation of a program to equip first year students with digital skills to operate file management systems and learn basic coding in VEX Virtual R</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Project Brown Sugar</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Student Initiated</li>
            <li>Participated in preparing handmade crocheted goods that were then sold to raise funds for Project Brown Sugar by Go With The Flow, an organization that aims to bridge gaps in access to menstrual healthcare in Singapore</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>JC1 Subject Support Telegram</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Student Initiated</li>
            <li>Participated in preparing a platform to allow first year students to find help on specific subjects from designated seniors through the use of the Telegram platform, including the preparation of a bot with custom code and Telegram channel.</li>
            <li>This service was not verified as it did not find sufficient first year participants.</li>
          </ul>
        </li>
      </ul>

      <br>
      <h3>Enrichment</h3>
      <ul class = "drop-list">
        <li>
          <div class = "drop-btn">
            <p>Millenia Institute Cyber Wellness Forum</p>
            <p>2024</p>
          </div>
          <ul class = "drop-cont">
            <li>As a leader of Maker's Academy, participated in an event held at Millenia Institute on Cyber Wellness in the context of AI technologies</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Innovative Engineering Solution 1:1</p>
            <p>2024</p>
          </div>
          <ul class = "drop-cont">
            <li>As a leader of Maker's Academy, participated in an educational event held at a local hardware manufacturing firm on manufacturing processes and working conditions</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>ISPR Connect: Settle and Share for international and permanent resident
            students</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>An event that gathered senior International Students (IS) and Permanent Residents (PR) to share their experiences with incoming IS and PR students that school year</li>
          </ul>
        </li>
        
        <li>
          <div class = "drop-btn">
            <p>National Heritage Board (NHB): Heritage Conservation Centre Learning
            Journey</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Partitipated in a learning journey to a conservation centre to learn about conservation and storage processes and preserved media</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Class Leaders and Co-Curricular Activity Leaders Peer Support Mentoring</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Participated in a program aimed to train school leaders to support peers who are socially avoidant.</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>King of the Arena</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Internal school sports event</li>
          </ul>
        </li>

        <li>
          <div class = "drop-btn">
            <p>Chinese New Year Couplet Writing</p>
            <p>2025</p>
          </div>
          <ul class = "drop-cont">
            <li>Participated in an caligraphy compettition for writing Chinese New Year decorative couplets</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>



  <div id = "cont-right">
    <canvas id="game-board"></canvas>
  </div>

</div>


<section id="spacer"></section>
`;

const canvas = document.getElementById('game-board');
const game = new Game(canvas);

game.initialize();

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
  const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);
  game.toggle(x, y);
});

document.addEventListener('keydown', (e) => {
  game.do(e.key.toLowerCase());
});

const main = document.getElementById('main');
const mainBtn = document.getElementById('main-btn');
const info = document.getElementById('info');
const infoBtn = document.getElementById('info-btn');

mainBtn.addEventListener('click', (e) => {
  e.preventDefault();

  main.style.display = 'block';
  info.style.display = 'none';
});

infoBtn.addEventListener('click', (e) => {
  e.preventDefault();

  main.style.display = 'none';
  info.style.display = 'block';
});

const buttons = document.querySelectorAll('.drop-btn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.opacity = 0;
      content.style.transform = 'translateY(-10px)';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.opacity = 1;
      content.style.transform = 'translateY(0)';
    }
  });
});
