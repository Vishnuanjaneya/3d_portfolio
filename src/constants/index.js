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
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web 3D Designer",
      icon: web,
    },
    {
      title: "React & UI/UX Developer",
      icon: mobile,
    },
    {
      title: "Software  &  Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
  
  const experiences = [
    {
      title: "UI/UX Designer 🎨",
      company_name: "FIGMA",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Dec2023 - Jan 2024",
      points: [
        "Innovating within the Figma platform, I introduced a dynamic 3D carousel to showcase OTT landing pages, enhancing user engagement and visual appeal.",
        "Innovating within the Figma platform, I introduced a dynamic 3D carousel to showcase OTT landing pages, enhancing user engagement and visual appeal.",
        "Employing responsive design principles, I optimized the prototype for various devices, improving accessibility and usability across different screen sizes.",
        "Through meticulous testing and iterative refinement, I enhanced performance and cross-browser compatibility, delivering a polished product that exceeds industry standards.",
      ],
    },
    {
      title: "Software & Frontend Dev 🖥️",
      company_name: "Snapgram",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "3D Web Designer 🎲",
      company_name: "3D Portfolio",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Seamlessly integrated captivating 3D visuals into web design projects, enhancing user engagement and interactivity.",
        "Created immersive 3D portfolios utilizing advanced technologies like 3js Library, showcasing skills and expertise in a dynamic manner.",
        "Implemented innovative 3D elements to provide visitors with an unforgettable exploration of my work.",
        "Committed to pushing the boundaries of creativity and innovation in the digital landscape through visually stunning 3D presentations.",
      ],
    },
    {
      title: "Achievements 🏆",
      company_name: "Symposium",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - March 2023",
      points: [
        "Achieved first place in multiple prestigious paper presentation competitions at renowned symposiums hosted by Anna University, including Indcon by the Industrial Engineering department and ITRIX by the Information Science and Technology department.",
        "Recognized for outstanding academic performance and innovative research in the field of Human-Computer Interaction (HCI) at Chennai Institute of Technology's Hackers Symposium, organized by the Computer Science Engineering department.",
        "Presented a groundbreaking paper titled 'AI Based HCI for Specially-Abled' showcasing advanced research and dedication towards leveraging technology for the betterment of differently-abled individuals.",
        "Demonstrated exceptional skills in academic research, communication, and interdisciplinary collaboration, earning accolades and contributing to advancements in accessible technology solutions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Vishnu proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Vishnu does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Vishnu optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based Banking platform that allows users to search, book, and manage bank transactions savings account and loan account queries using IBM Watson Assistant",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Vishnuanjaneya",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Mediapipe",
          color: "green-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Vishnuanjaneya",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Vishnuanjaneya",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };