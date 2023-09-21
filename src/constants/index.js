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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,  
  call,
  bootstrap,
  mui,
  restapi,
  sass
  
} from "../assets";




const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "HardWare Reaper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    percent:10,
    icon: html,
  },
  {
    name: "CSS 3",
    percent:10,
    icon: css,
  },
  {
    name: "JavaScript",
    percent:10,
    icon: javascript,
  },
  {
    name: "TypeScript",
    percent:10,
    icon: typescript,
  },
  {
    name: "React JS",
    percent:10,
    icon: reactjs,
  },
  {
    name: "Redux",
    percent:10,
    icon: redux,
  },
  {
    name: "Tailwind",
    percent:10,
    icon: tailwind,
  },
  {
    name: "Sass",
    percent:10,
    icon: sass,
  },
  {
    name: "Bootstrap",
    percent:10,
    icon: bootstrap,
  },
  {
    name: "MUI",
    percent:10,
    icon: mui,
  },
  {
    name: "Rest api",
    percent:10,
    icon: restapi,
  },
  {
    name: "figma",
    percent:10,
    icon: figma,
  },
  {
    name: "git",
    percent:10,
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies."
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara",
    designation: "Student",
    company: "Project",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Taj",
    designation: "Software Engineer",
    company: "Infosys",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ravi",
    designation: "Business",
    company: "HiTech",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HiTech WaterProofing",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: call,
    source_code_link: "https://github.com/",
  },
  {
    name: "HiTech WaterProofing",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: call,
    source_code_link: "https://github.com/",
  },
  {
    name: "HiTech WaterProofing",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: call,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
