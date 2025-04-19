import bannerImage from "@/app/Assets/banner.jpg";
import webdev from "@/app/Assets/programming.png";
import backend from "@/app/Assets/development.png";
import management from "@/app/Assets/management.png";
import eCommerce from "@/app/Assets/e-commerce.png";
import maintainance from "@/app/Assets/maintainance.png";
import deploy from "@/app/Assets/startup.png";

import html from "@/app/Assets/html-5.png";

import tailwind from "@/app/Assets/tailwind.png";
import js from "@/app/Assets/js.png";
import typescript from "@/app/Assets/typescript.png";
import next from "@/app/Assets/next.png";
import react from "@/app/Assets/react.png";
import redux from "@/app/Assets/redux.png";
import firebase from "@/app/Assets/firebase.png";
import graphQl from "@/app/Assets/graphQl.png";
import jest from "@/app/Assets/jest.png";
import docker from "@/app/Assets/docker.png";
import mongoose from "@/app/Assets/Mongoose.png";
import node from "@/app/Assets/node.png";
import mySql from "@/app/Assets/sql.png";

import express from "@/app/Assets/express.png";
import mongodb from "@/app/Assets/mongodb.png";
import postgreSQL from "@/app/Assets/postgreSQL.png";
import restApi from "@/app/Assets/restApi.png";

import website1 from "@/app/Assets/website1.png";
// People
import man1 from "@/app/Assets/man1.jpg";
import man2 from "@/app/Assets/man2.jpg";
import man3 from "@/app/Assets/man3.png";
import man4 from "@/app/Assets/man4.png";
import man5 from "@/app/Assets/man5.png";
const services = [
  {
    name: "Web Development",
    icon: webdev,
    description:
      "Build responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, React, and Next.js. Ensure high performance, seamless user experience, and optimized designs for all devices.",
  },
  {
    name: "Backend Development",
    icon: backend,
    description:
      "Design and implement robust backend systems using Node.js, Express, and databases like MongoDB or PostgreSQL. Create secure APIs and ensure smooth data handling for scalable applications.",
  },
  {
    name: "Management Systems",
    icon: management,
    description:
      "Design and implement customized management systems tailored to diverse sectors such as hospitals, schools, clinics, real estate, and other industries. Ensure efficient workflow automation, data management, and seamless integration to enhance operational effectiveness.",
  },
  {
    name: "E-Commerce Solutions",
    icon: eCommerce,
    description:
      "Develop custom e-commerce platforms integrated with payment gateways, inventory management, and user-friendly product navigation to streamline the shopping experience.",
  },
  {
    name: "Web Maintenance",
    icon: maintainance,
    description:
      "Provide ongoing support and maintenance for websites, ensuring performance optimization, security updates, and adaptability to changing business needs.",
  },
  {
    name: "Deployment & Hosting",
    icon: deploy,
    description:
      "Deploy applications on platforms like Vercel, Netlify, AWS, or Heroku. Optimize hosting solutions for reliable uptime and performance, ensuring seamless accessibility.",
  },
];

const skills = {
  frontend: [html, tailwind, js, react, typescript, next, redux],
  backend: [node, express, graphQl, jest, restApi, docker],
  database: [mongodb, postgreSQL, mySql, firebase],
};

const myWorks = [
  {
    photo: website1,
    name: "Website 1",
  },
  {
    photo: website1,
    name: "Website 2",
  },
  {
    photo: website1,
    name: "Website 3",
  },
  {
    photo: website1,
    name: "Website 4",
  },
  {
    photo: website1,
    name: "Website 5",
  },
  {
    photo: website1,
    name: "Website 6",
  },
];

const myReviews = [
  {
    name: "John Doe",
    title: "Founder of TechSpark",
    heading: "Amazing development skills with exceptional attention to detail!",
    description:
      "Working with you was a game-changer for our company. The website you built is fast, responsive, and incredibly user-friendly. Your expertise in combining creative designs with powerful backend functionality is unmatched.",
    image: man1,
  },
  {
    name: "Sarah Williams",
    title: "Marketing Manager at BrandHive",
    heading: "A true professional who brings visions to life!",
    description:
      "Your ability to understand our requirements and translate them into a stunning website was truly impressive. The SEO-friendly structure and smooth navigation have significantly boosted our online presence. Highly recommend!",
    image: man2,
  },
  {
    name: "David Lee",
    title: "CEO of NextGen Enterprises",
    heading: "Exceeded expectations every step of the way!",
    description:
      "From conceptualization to deployment, you delivered top-tier development work that far surpassed what we imagined. The seamless integration of APIs and dynamic features made our platform incredibly robust.",
    image: man3,
  },
  {
    name: "Jessica Taylor",
    title: "Owner of TrendyShop",
    heading: "Highly skilled and very communicative throughout the process!",
    description:
      "The e-commerce site you created has transformed our business. The user-friendly design and secure payment integrations have led to a significant increase in customer satisfaction. Fantastic work!",
    image: man4,
  },
  {
    name: "Michael Carter",
    title: "CTO of CloudCore Solutions",
    heading: "Delivered cutting-edge solutions with flawless execution!",
    description:
      "Your technical expertise and problem-solving abilities made complex challenges seem easy. The scalable architecture and performance optimization were crucial for our long-term success. Brilliant work!",
    image: man5,
  },
];

const assets = {
  bannerImage,
  services,
  skills,
  myWorks,
  myReviews,
};

export default assets;
