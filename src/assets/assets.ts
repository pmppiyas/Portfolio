import bannerImage from "@/assets/banner.jpg";
import backend from "@/assets/development.png";
import eCommerce from "@/assets/e-commerce.png";
import maintainance from "@/assets/maintainance.png";
import management from "@/assets/management.png";
import webdev from "@/assets/programming.png";
import deploy from "@/assets/startup.png";

import docker from "@/assets/docker.png";
import firebase from "@/assets/firebase.png";
import graphQl from "@/assets/graphQl.png";
import jest from "@/assets/jest.png";
// import mongoose from "@/assets/mongoose.png";
import next from "@/assets/next.png";
import node from "@/assets/node.png";
import oauth from "@/assets/oauth.svg";
import react from "@/assets/react.png";
import redux from "@/assets/redux.png";
import mySql from "@/assets/sql.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";

import express from "@/assets/express.png";
import mongodb from "@/assets/mongodb.png";
import postgreSQL from "@/assets/postgreSQL.png";
import restApi from "@/assets/restApi.png";

import website1 from "@/assets/website1.png";
// People
import man1 from "@/assets/man1.jpg";
import man2 from "@/assets/man2.jpg";
import man3 from "@/assets/man3.png";
import man4 from "@/assets/man4.png";
import man5 from "@/assets/man5.png";

// Lottie Image
// Resume
// import resume from "@/assets/resume.pdf";
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
  frontend: [tailwind, react, typescript, next, redux],
  backend: [restApi, node, express, graphQl, oauth, jest, docker],
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
      "The website you built is fast, responsive, and user-friendly. Your designs and backend expertise were unmatched.",
    image: man1,
  },
  {
    name: "Sarah Williams",
    title: "Marketing Manager at BrandHive",
    heading: "A true professional who brings visions to life!",
    description:
      "You created a stunning, SEO-friendly website that boosted our online presence. Highly recommend!",
    image: man2,
  },
  {
    name: "David Lee",
    title: "CEO of NextGen Enterprises",
    heading: "Exceeded expectations every step of the way!",
    description:
      "Your top-tier work delivered seamless integration and dynamic features that strengthened our platform.",
    image: man3,
  },
  {
    name: "Jessica Taylor",
    title: "Owner of TrendyShop",
    heading: "Highly skilled and very communicative throughout the process!",
    description:
      "The e-commerce site is user-friendly and secure, significantly enhancing our customer satisfaction.",
    image: man4,
  },
  {
    name: "Michael Carter",
    title: "CTO of CloudCore Solutions",
    heading: "Delivered cutting-edge solutions with flawless execution!",
    description:
      "Your expertise optimized scalability and performance, ensuring our long-term success.",
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
