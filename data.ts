import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { GiArtificialIntelligence } from "react-icons/gi";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>CSS</b> , <b>Bootstrap</b> , <b>React.js etc.</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express</b> , <b>ASP.NET</b> etc. frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coding",
    about: "problem solving habit in <b>Codeforces</b> and <b>LeetCode</b> ",
  },
  {
    Icon: GiArtificialIntelligence,
    title: "Machine Learning",
    about:
      "practical knowledge in <b>Machine Learning</b> , <b>Neural Networks</b> and <b>NLP</b>",
  },
  {
    Icon: RiComputerLine,
    title: "Research",
    about:
      "Eager to study cutting edge <b>ML/DL concepts</b> and implement them",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "70",
  },

  {
    Icon: BsCircleFill,
    name: "C#",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Bootstrap 5",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "ASP.NET",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "PyTorch",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Keras",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "CSS Flex & Grid",
    level: "65",
  },
];

export const projects: IProject[] = [
  {
    name: "My-Poke-Wiki",
    description:
      "Pokedex/ pokemon wiki which contains stats, abilities and pictures of all the pokemons",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    key_techs: ["React", "Redux", "Bootstrap 5", "PokeAPI"],
  },
  {
    name: "SpaceX Info",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    description: "App for all the spaceX launches info",
    key_techs: ["React", "Redux", "Bootstrap 5", "Jest", "spacexdata API"],
  },

  {
    name: "Live weather info",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    description:
      "Takes country and city name as input and shows temperature, humidity etc.",
    key_techs: ["React", "Material UI", "OpenWeatherMap API"],
  },

  {
    name: "My-Expense-Tracker",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    description: "Expense Calculator",
    key_techs: ["React"],
  },

  {
    name: "RentQuest",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["ASP.NET", "SQL"],
    description: "A dynamic web application for property rental purposes ",
    key_techs: ["ASP.NET CORE", "MVC", "MSSQL Server", "Bootstrap"],
  },

  {
    name: "Youtube Comment Sentiment Analysis",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["ML/NLP"],
    description:
      "NLP project for +ve/-ve sentiment/polarity detection of comments from different youtube video categories",
    key_techs: [
      "PyTorch",
      "NLTK",
      "spaCy",
      "Matplotlib",
      "sklearn",
      "RNN",
      "Word-embedding",
    ],
  },

  {
    name: "NumtaDB - Bengali Handwritten Digits Classification using Neural Network",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["ML/NLP"],
    description: "Optical Character Recognition using Neural Networks",
    key_techs: ["PyTorch", "Numpy", "Pandas", "Matplotlib", "sklearn"],
  },

  {
    name: "Football Tournament Management System",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["Java", "SQL"],
    description: "Desktop application for tournament stats",
    key_techs: ["Java", "MSSQL Server"],
  },
  {
    name: "ClassyCooking",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["PHP", "SQL"],
    description:
      "A restaurant website (with admin panel) where owner showcases the exotic menu and other up-to-date info",
    key_techs: ["PHP", "MySQL"],
  },
  {
    name: "Distributed Office Management System",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["SQL"],
    description: "A distributed database software for a startup company",
    key_techs: ["PL/SQL"],
  },
  {
    name: "Voice Recorder plus MP3 Player",
    image_path: "/images/a.jpg",
    deployed_url: "",
    github_url: "",
    category: ["Android", "SQL"],
    description: "A simple but catchy android app ",
    key_techs: ["Android Studio", "Java", "SQLite"],
  },
];
