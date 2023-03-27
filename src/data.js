// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCplusplus } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/LightMode.jpg";
import HeroDark from "./images/Dark1.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Metbcy";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "My name is Amir Bredy, I'm a Rising CS Senior currently studying @ the illustrious Howard University. I love exploring new technology when I have the chance and I will be working as a Product Management intern this summer @ Microsoft! I’ll be working on honing my Product Management skills working on the Cloud. I’m also looking to collaborate on exciting projects that can change the lives of others!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <SiCplusplus className="display-4" />,
    name: "C++",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaAws className="display-4" />,
    name: "AWS",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiHtml5 className="display-4" />,
    name: "HTML",
  },
  {
    id: 7,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1QsOors7s0f2bdo9z_DTBI8SjA_zl0JWF/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["LSPGit", "DevYourOwnBenchmark", "FiboMips"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "LSPGit",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mrgvangk";
