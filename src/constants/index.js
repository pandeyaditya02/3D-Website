import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  responsible,
  dataled,
  genAI,
  automotive,
  bank,
  telecom,
  healthcare,
} from "../assets";

import { AiOutlineArrowDown } from "react-icons/ai";
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "partners ",
    title: "Partners",
    icon: AiOutlineArrowDown,
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const services = [
  {
    title: "Cloud & Devops",
    icon: web,
  },
  {
    title: "Robotics Process Automation",
    icon: mobile,
  },
  {
    title: "AI & ML",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const partners = [
  {
    name: "part1",
    icon: part1,
  },
  {
    name: "part2",
    icon: part2,
  },
  {
    name: "part3",
    icon: part3,
  },
  {
    name: "part4",
    icon: part4,
  },
  {
    name: "part5",
    icon: part5,
  },
  {
    name: "part6",
    icon: part6,
  },
  {
    name: "part7",
    icon: part7,
  },
  {
    name: "part8",
    icon: part8,
  },
  {
    name: "part9",
    icon: part9,
  },
  {
    name: "part10",
    icon: part10,
  },
];

const experiences = [
  {
    title: "Banking",
    company_name: "AI-driven cybersecurity solutions",
    icon: bank,
    iconBg: "#383E56",
    points: [
      "They enhance fraud detection, safeguarding customers from financial fraud.",
      "These solutions automate incident response, minimizing downtime during security breaches.",
      "Their continuous learning AI adapts to evolving cyber risks, ensuring the security landscape remains up-to-date.",
      "It empowers the banking sector to provide secure, seamless, and trusted financial services to customers in the digital age.",
    ],
  },
  {
    title: "Automotive",
    company_name: "AI-driven cybersecurity solutions",
    icon: automotive,
    iconBg: "#E6DEDD",
    points: [
      "AI refines self-driving capabilities with real-time data analysis while cybersecurity safeguards against hacking risks.",
      "AI predicts maintenance needs for optimal vehicle health, paired with cybersecurity for data privacy.",
      "AI tailors in-car features; cybersecurity ensures private user data protection.",
      "AI optimizes logistics, while cybersecurity shields production data from threats.",
    ],
  },
  {
    title: "Healthcare",
    company_name: "AI-driven cybersecurity solutions",
    icon: healthcare,
    iconBg: "#383E56",
    points: [
      "AI enhances autonomous driving with real-time data analysis, while cybersecurity counters hacking risks.",
      "Predictive maintenance uses AI for optimal vehicle health, paired with cybersecurity for data privacy.",
      "Personalized user experiences in cars are powered by AI while cybersecurity ensures private user data protection.",
      "AI optimizes supply chain logistics, while cybersecurity shields production data from threats.",
    ],
  },
  {
    title: "Telecom",
    company_name: "AI-driven cybersecurity solutions",
    icon: telecom,
    iconBg: "#E6DEDD",
    points: [
      "AI enhances telecom networks, predicting outages and improving performance, while cybersecurity safeguards customer data from cyber threats.",
      "AI-driven chatbots streamline customer service, while strong cybersecurity prevents data breaches.",
      "AI reduces network downtime through predictive maintenance, coupled with robust cybersecurity to protect communication systems.",
      "AI ensures telecom data security, while cybersecurity measures uphold data integrity and privacy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Partnering with Buffercode transformed our security posture and minimized vulnerabilities.",
    name: "Mark Zuckerberg",
    designation: "CEO",
    company: "META",
    image:
      "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
  },
  {
    testimonial:
      "Buffercode understood our needs, delivering tailored solutions that fortified our defenses.",
    name: "Luca Maestri",
    designation: "CFO",
    company: "APPLE",
    image:
      "https://www.nestle.com/sites/default/files/styles/profile_content/public/luca-maestri.jpg?h=e2aadd45&itok=WMjXPl8O",
  },
  {
    testimonial:
      "Confidence soared as Buffercode shielded us from threats, letting us focus on business.",
    name: "Kumar Mangalam Birla",
    designation: "CEO",
    company: "Aditya Birla Group",
    image:
      "https://www.adityabirla.com/Upload/Content_Files/KMB-profile-picture.jpg",
  },
];

const projects = [
  {
    name: "Generative AI",
    description:
      "Innovate securely, responsibly and sustainably with Large Language Models (LLMs) and Generative AI. Generative AI is indispensable in modern industries, crafting novel content, designs, and solutions. Its ability to autonomously generate diverse outputs accelerates innovation, streamlines creativity, and enhances personalization, fostering ",
    tags: [
      {
        name: "AIRevolution ",
        color: "blue-text-gradient",
      },
      {
        name: "IndustryRevolution",
        color: "green-text-gradient",
      },
      {
        name: "CreativeMachines ",
        color: "pink-text-gradient",
      },
    ],
    image: responsible,
  },
  {
    name: "Data-led Transformation",
    description:
      "Recognize the value of data to drive sustainable growth. Data-led transformation is imperative for industries to thrive in the digital age. Harnessing data insights empowers informed decision-making, enhances operational efficiency, and cultivates innovation.",
    tags: [
      {
        name: "DataDrivenFuture",
        color: "blue-text-gradient",
      },
      {
        name: "TransformWithData",
        color: "green-text-gradient",
      },
      {
        name: "InnovationUnleashed",
        color: "pink-text-gradient",
      },
    ],
    image: dataled,
  },
  {
    name: "Responsible AI",
    description:
      "Design and deploy AI solutions that are ethical, transparent, and trustworthy. The industry increasingly relies on AI. Responsible AI is essential to ensure ethical, unbiased, and safe deployment, guarding against unintended consequences.",
    tags: [
      {
        name: "EthicalTech",
        color: "blue-text-gradient",
      },
      {
        name: "AIResponsibility",
        color: "green-text-gradient",
      },
      {
        name: "TechEthics",
        color: "pink-text-gradient",
      },
    ],
    image: genAI,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  partners,
};
