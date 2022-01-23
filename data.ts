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
      "eager to study cutting edge <b>ML/DL concepts</b> and implement them",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "75",
  },

  {
    Icon: BsCircleFill,
    name: "C#",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "65",
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
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Keras",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Node and Express",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Django REST",
    level: "65",
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
];

export const projects: IProject[] = [
  {
    name: "My Pokémon Wiki",
    description:
      "Pokedex/ pokemon wiki which contains stats, abilities and pictures of all the pokemons",
    image_path: "/images/pokess.png",
    deployed_url: "https://pokemon-wiki-japa1h52d-asir053.vercel.app/",
    github_url: "https://github.com/Asir053/My-Poke-Wiki",
    category: ["React"],
    key_techs: ["React", "Redux", "Bootstrap 5", "PokeAPI"],
  },
  {
    name: "Live Weather Info",
    image_path: "/images/weatherss.png",
    deployed_url: "https://live-weather-info.vercel.app/",
    github_url: "https://github.com/Asir053/Live-weather-info",
    category: ["React"],
    description:
      "Takes country and city name as input and shows temperature, humidity etc.",
    key_techs: ["React", "Material UI", "OpenWeatherMap API"],
  },
  {
    name: "RentQuest",
    image_path: "/images/rentquestss.png",
    deployed_url: "https://www.youtube.com/watch?v=JYM9gwL1B_U",
    github_url: "https://github.com/Asir053/RentQuest",
    category: ["ASP.NET", "SQL"],
    description: "A dynamic web application for property rental purposes ",
    key_techs: ["ASP.NET CORE", "MVC", "MSSQL Server", "Bootstrap"],
  },
  {
    name: "Youtube Comment Sentiment Analysis",
    image_path: "/images/sentimentss.png",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/Youtube_Comment_Sentiment_Analysis",
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
    name: "My Expense Tracker",
    image_path: "/images/expencess.png",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/My-Expense-Tracker",
    category: ["React"],
    description: "Income-expense calculator",
    key_techs: ["React"],
  },
  {
    name: "SpaceX Launches Info",
    image_path: "/images/spacexss.png",
    deployed_url: "https://spacex-launches-info.herokuapp.com",
    github_url: "https://github.com/Asir053/spacex-info-demo",
    category: ["React"],
    description: "Filter SpaceX launches by rocket name, launch date etc.",
    key_techs: ["React", "Redux", "Bootstrap 5", "Jest", "spacexdata API"],
  },

  {
    name: "NumtaDB - Bengali Handwritten Digits Classification using Neural Network",
    image_path: "/images/nnss.png",
    deployed_url: "http://localhost:3000/projects",
    github_url:
      "https://github.com/Asir053/DeepLearning/tree/main/NumtaDB%20-%20Bengali%20Handwritten%20Digits%20Classification%20using%20Neural%20Network",
    category: ["ML/NLP"],
    description: "Optical Character Recognition using Neural Networks",
    key_techs: ["PyTorch", "Numpy", "Pandas", "Matplotlib", "sklearn"],
  },

  {
    name: "Football Tournament Management System",
    image_path: "/images/ftmsss.png",
    deployed_url: "http://localhost:3000/projects",
    github_url:
      "https://github.com/Asir053/Football_Tournament_Management_System",
    category: ["Java", "SQL"],
    description: "Desktop application for tournament stats",
    key_techs: ["Java", "MSSQL Server"],
  },
  {
    name: "ClassyCooking",
    image_path: "/images/classycookingss.jpg",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/ClassyCooking",
    category: ["PHP", "SQL"],
    description:
      "A restaurant website (with admin panel) where owner showcases the exotic menu and other up-to-date info",
    key_techs: ["PHP", "MySQL", "jQuery"],
  },
  {
    name: "Distributed Office Management System",
    image_path: "/images/plsqlss.png",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/Office_Management_System",
    category: ["SQL"],
    description: "A distributed database software for a startup company",
    key_techs: ["PL/SQL"],
  },
  {
    name: "Voice Recorder plus MP3 Player",
    image_path: "/images/androidss.jpg",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/VoiceRecorder_MP3Player",
    category: ["Android", "Java", "SQL"],
    description: "A simple but catchy android app ",
    key_techs: ["Android Studio", "Java", "SQLite"],
  },
  {
    name: "SmartHome",
    image_path: "/images/arduinoss.jpg",
    deployed_url: "http://localhost:3000/projects",
    github_url: "https://github.com/Asir053/SmartHome_Arduino",
    category: ["Arduino"],
    description:
      "Microcontroller based system design project for controlling electronic devices using voice commands in an android phone.",
    key_techs: ["Arduino", "C"],
  },
];
