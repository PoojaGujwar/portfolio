import DataVizImage from "../images/dataVizimage.png"
import EmailClientImage from "../images/emailCLient.png"
import SimbaPix from '../images/simbaImage.png'
import finchCart from "../images/finchCart.png"
import thrillTeamsUp from "../images/thrillTeamsUp.png"
import meetupHub from "../images/meetupHub.png"
import ChatApp from "../images/Chat_App_2.png"
import LeadApp from "../images/Capture1.PNG"

export const Bio = {
  name: "Pooja Gujwar",
  roles: ["Frontend Developer", "Full Stack Developer"],
  description:
    "I am a passionate and dedicated individual focused on delivering high-quality results. Diligent and committed, I always give my best in everything I do. Eager to take on new challenges, I’m excited to learn, contribute positively, and achieve success. With a growth mindset and a problem-solving attitude, I’m ready to make a meaningful impact.",
  github: "https://github.com/PoojaGujwar",
  linkedin: "https://www.linkedin.com/in/poojagujwar/",
  resume:
    "https://drive.google.com/file/d/1uuN4WeXeuAMLbQopeWuBaZ57JzHrgjYR/view?usp=sharing",
  email:"gujwarpooja@gmail.com"
};

export const experiences = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nz_CkBsuug4mZpkNfXkPdrj_1b-m8PxshQ&s",
    role: "Software Development Intern",
    company: "neoG Camp",
    date: "Aug 2023 - Dec 2023",
    desc: "",
    skills: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
    ],
  },
];

// export const education = [
//   {
//     id: 0,
//     img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",
//     collage: "savitribai phule pune university",
//     date: "Oct 2021 - may 2024",
//     grade: 8.0,
//     degree: "Bachelor of Computer Applications",
//   },
// ];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Redux-Toolkit",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat-App",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Built a real-time chat app with user registration and direct messaging using React, Node.js, and Socket.IO .Implemented user authentication and real-time private chats using WebSockets.",
    image: ChatApp,
    tags: [
       "React", "Node.js", "MongoDB","Express.js","Socket.io","Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/Chat_App",
    webapp: "https://chat-app-beta-blush-77.vercel.app/",
  },
  {
    id: 2,
    title: "ThrillTeamsUp",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Built an interactive project, tasks and teams management dashboard using the MERN stack, enabling users to analyze large datasets through intuitive charts and advanced filtering options.",
    image: thrillTeamsUp,
    tags: [
      "React Js",
      "Express Js",
      "MongoDB",
      "Bootstrap",
      "Chart.js",
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/Thrill_Frontend",
    webapp: "https://taskapp-beryl.vercel.app/",
  },
  {
    id: 3,
    title: "Meetup Hub",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Developed a web application enabling users to browse, and participate in meetups with seamless navigation.Key features include participant management, and real-time updates. Integrated client-side routing with React Router DOM and built a consistent, maintainable UI using modern JavaScript",
    image: meetupHub,
    tags: [
      "React Js",
      "Express Js",
      "MongoDB",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/Meetup_Hub_Frontend",
    webapp: "https://meetup-hub-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "SimbaPix",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Simba Pix is a full-stack photo album application built with React, Node.js, Express, and Socket.io. It allows users to sign in with Google, create and share albums, upload images using Multer & Cloudinary, and experience a responsive Bootstrap UI with real-time updates.",
    image: SimbaPix,
    tags: [
       "React", "Node.js", "MongoDB", "Cloudinary", "Multer"
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/simbaPix_UI",
    webapp: "https://simba-pix-ui.vercel.app/",
  },
    {
    id: 5,
    title: "FinchCart",
    // date: "Sep 2024 - Sep 2024",
    description:
      "Developed a fully functional E-Commerce platform enabling users to browse, search, filter, and purchase products with real-time cart updates.",
    image: finchCart,
    tags: [
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",,
      "CSS",
      "Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/myShoppingSite-frontend",
    webapp: "https://my-shopping-site-frontend.vercel.app/"
     },
  {
    id: 6,
    title: "LeadMagnetix",
    // date: "Aug 2024 - Aug 2024",
    description:
      "A full-stack lead management app where you can add, edit, and assign leads to agents. You can also filter leads by status and agents.Built with React for the frontend, Express/Node for the backend, MongoDB as the database, and Redux for state management.",
    image: LeadApp,
    tags: [
       "React","Redux", "Node.js", "MongoDB","Express.js","Bootstrap"
    ],
    category: "web app",
    github: "https://github.com/PoojaGujwar/leadMagnetix",
    webapp: "https://lead-magnetix-ashy.vercel.app",
  }
];

export const TimeLineData = [{ year: 2025, text: "Started my journey" }];
