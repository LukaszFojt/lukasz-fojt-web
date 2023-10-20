import { 
  solarSystemSvg, 
  sunSvg, 
  spaceImg,

  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  nodejsIcon,
  tailwindIcon,
  framerIcon,
  threejsIcon,
  blenderIcon,

  githubIcon,
  linkedinIcon,
  mailIcon,
  websiteIcon,
  artstationIcon,
  ui,
  ux,
  web_dev,
  game_dev,
  modeling_3d,
  responsive_design,

} from "../assets";

import { 
  mercuryTexture,
  marsTexture,
  earthTexture,
  venusTexture,
  jupiterTexture,
  saturnTexture,
  uranusTexture,
  neptuneTexture
} from '../assets/planets';

export const navLinks = [
    {
        id: 'home',
        title: 'HOME',
        link: '/',
    },
    {
        id: 'projects',
        title: 'PROJECTS',
        link: '/projects',
    },
    {
        id: 'articles',
        title: 'ARTICLES',
        link: '/articles',
    },
    {
        id: 'about',
        title: 'ABOUT',
        link: '/about',
    },
    {
        id: 'contact',
        title: 'CONTACT',
        link: '/contact',
    },
]

export const destinationLinks = [
    {
        id: 'moon',
        title: 'MOON',
    },
    {
        id: 'mars',
        title: 'MARS',
    },
    {
        id: 'europa',
        title: 'EUROPA',
    },
    {
        id: 'titan',
        title: 'TITAN',
    },
]

export const footerLinks = [
    {
        name: "Github",
        icon: githubIcon,
        link: "https://github.com/LukaszFojt",
    },
    {
        name: "Linkedin",
        icon: linkedinIcon,
        link: "https://www.linkedin.com/in/%C5%82ukasz-fojt-764285290/",
    },
    {
        name: "Artstation",
        icon: artstationIcon,
        link: "https://www.artstation.com/lukasz-fojt",
    },
    {
        name: "Website",
        icon: websiteIcon,
        link: "https://lukasz-fojt-web.vercel.app/",
    },
    {
      name: "Mail",
      icon: mailIcon,
      link: "mailto:lukaszfojt98@gmail.com"
    }
]

export const dataSlider = [
  {
    title: "Image-1",
    img: spaceImg
  },
  {
    title: "Image-2",
    img: marsTexture
  },
  {
    title: "Image-3",
    img: sunSvg
  },
  {
    title: "Image-3",
    img: solarSystemSvg
  },
]

export const skills = [
  {
    name: "Web Development",
    content:
      "I develop unique and fun to interact sites.",
    svg: web_dev,
  },
  {
    name: "Responsive Design",
    content:
      "All my sites are designed for use on any screen resolutions",
    svg: responsive_design,
  },
  {
    name: "User Interface",
    content:
      "I create modern user interfaces",
    svg: ui,
  },
  {
    name: "User Experience",
    content:
      "I'm always looking for the most satisfying and intuitive user experience possible",
    svg: ux,
  },
  {
    name: "3D Modeling",
    content:
      "I'm creating simple 3D models in Blender myself.",
    svg: modeling_3d,
  },
  {
    name: "Game Developments",
    content:
      "I'm also on beginner level in game development in Unity.",
    svg: game_dev,
  },
  
]

export const planetsInfo = [
  {
    name: "Mercury",
    content:
    "Mercury is the first planet from the Sun and the smallest in the Solar System. It is a terrestrial planet with a heavily cratered surface due to overlapping impact events. These features are well preserved since the planet has no geological activity and an extremely tenuous atmosphere called an exosphere." ,
    planetScale: 1,
    texture: mercuryTexture,
  },
  {
    name: "Wenus",
    content:
    "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth." ,
    planetScale: 1.5,
    texture: venusTexture,
  },
  {
    name: "Earth",
    content:
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. " ,
    planetScale: 1.5,
    texture: earthTexture,
  },
  {
    name: "Mars",
    content:
    "Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname 'the Red Planet'" ,
    planetScale: 1.5,
    texture: marsTexture,
  },
  {
    name: "Jupiter",
    content:
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun." ,
    planetScale: 3,
    texture: jupiterTexture,
  },
  {
    name: "Saturn",
    content:
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth." ,
    planetScale: 2.5,
    texture: saturnTexture,
  },
  {
    name: "Uranus",
    content:
    "Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles." ,
    planetScale: 1.5,
    texture: uranusTexture,
  },
  {
    name: "Neptune",
    content:
    "Neptune is the eighth planet from the Sun and the farthest IAU-recognized planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet." ,
    planetScale: 1.5,
    texture: neptuneTexture,
  },
]

export const projects = [
    {
      name: "Scientific Website",
      content:
        "Website about our cosmos that allowes to browse amongst planets and see 3D Solar System in it's full glory.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: spaceImg,
      link_to: "/projects/cosmos",
      link_to_github: "https://github.com/LukaszFojt",
    },
    {
      name: "Job IT",
      content:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: spaceImg,
      link_to: "/projects/2",
      link_to_github: "https://github.com/LukaszFojt",
    },
    {
      name: "Scientific Website",
      content:
        "Website about our cosmos that allowes to browse amongst planets and see 3D Solar System in it's full glory.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: spaceImg,
      link_to: "/projects/cosmos",
      link_to_github: "https://github.com/LukaszFojt",
    },
  ];

  export const articles = [
    {
      name: "Github Basics",
      content:
        "Github about our cosmos that allowes to browse amongst planets and see 3D Solar System in it's full glory.",
      image: spaceImg,
      link_to: "/articles/github-basics",
      link_to_github: "https://github.com/LukaszFojt",
    },
    {
      name: "Article2",
      content:
        "Article info about application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      image: spaceImg,
      link_to: "/articles/2",
      link_to_github: "https://github.com/LukaszFojt",
    },
    {
      name: "Scientific Article",
      content:
        "Website about our cosmos that allowes to browse amongst planets and see 3D Solar System in it's full glory.",
      image: spaceImg,
      link_to: "/articles/3",
      link_to_github: "https://github.com/LukaszFojt",
    },
  ];

  export const aboutInfo = [
    {
      content:
      "Hi, I am Lukasz. Nice to meet you.This is my new personal website created completely from scratch. There are some of my interests: Web Development Games Development in Unity 3D Graphic in Blender. You can find contact me informations at the navbar or on the bottom.",
    },
  ]

  export const techStack = [
    {
      name: "HTML",
      color: "red-text-gradient",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      color: "blue-text-gradient",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      color: "yellow-text-gradient",
      icon: jsIcon,
    },
    {
      name: "React",
      color: "blue-text-gradient",
      icon: reactIcon,
    },
    {
      name: "NodeJS",
      color: "green-text-gradient",
      icon: nodejsIcon,
    },
    {
      name: "TailwindCSS",
      color: "blue-text-gradient",
      icon: tailwindIcon,
    },
    {
      name: "FramerMotion",
      color: "violet-text-gradient",
      icon: framerIcon,
    },
    {
      name: "ThreeJS",
      color: "white-text-gradient",
      icon: threejsIcon,
    },
    {
      name: "Blender",
      color: "orange-text-gradient",
      icon: blenderIcon,
    },
  ]