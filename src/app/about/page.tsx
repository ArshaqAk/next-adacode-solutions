import React from "react";
import { AboutCard } from "../components/";

const missionCardData = [
  {
    imgUrl: "https://img.icons8.com/color/48/light.png",
    title: "Empowering Change, Embracing Purpose",
    description:
      "Dedicated to empowering individuals for meaningful change in technology. Discover purposeful learning, cutting-edge courses, and a commitment to excellence defining AdaCode's mission in shaping the future of software development.",
  },
  {
    imgUrl: "https://img.icons8.com/parakeet/48/innovation.png",
    title: "Innovation at Its Core",
    description:
      "Unleash creativity and innovation with AdaCode Solutions. Programs foster constant evolution, pushing boundaries in software development. Explore coding, problem-solving, and breakthroughs defining our commitment to fostering innovation.",
  },
  {
    imgUrl: "https://img.icons8.com/arcade/64/leader.png",
    title: "Building Tech Leaders",
    description:
      "AdaCode cultivates the next generation of tech leaders. Our curriculum and hands-on projects equip you with skills and mindset to lead in the dynamic tech industry. Join us in building a community of forward-thinking tech leaders.",
  },
  {
    imgUrl: "https://img.icons8.com/color/48/saving-book.png",
    title: "Continuous Learning, Endless Possibilities",
    description:
      "Embark on a journey of continuous learning with AdaCode. Our commitment to education goes beyond the classroom, providing tools to adapt to the ever-evolving tech landscape. Explore endless possibilities and stay ahead in software development.",
  },
  {
    imgUrl: "https://img.icons8.com/arcade/64/group-task.png",
    title: "Tech for Social Impact",
    description:
      "Make a difference with technology at AdaCode Solutions. Focus on harnessing the power of code to address social challenges and create positive impact. Join us in using technology as a force for good, contributing to projects that make a meaningful difference.",
  },
];

function About() {
  return (
    <div className="about_container">
      <div className="about_wrapper">
        <h1>
          Our <span>Mission </span>
        </h1>
        <div className="card_contianer">
          {missionCardData.map((item, index) => (
            <AboutCard
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              key={index}
            />
          ))}
        </div>
        {/*
           <h1>
          Our <span>Vision</span>
        </h1>
        <div className="vision_wrapper">
          <p>
            At Adacode Solutions, we envision a future where knowledge is a
            catalyst for transformative innovation. Our commitment is to empower
            individuals in Kozhikode, Kerala, and beyond with cutting-edge
            skills in data science, cloud computing, robotics, embedded
            programming, and full-stack development. We aim to bridge the gap
            between theoretical knowledge and practical application, fostering a
            dynamic learning environment that nurtures curiosity, creativity,
            and collaboration. Join us in shaping a future where our training
            programs unlock potential, inspire innovation, and build a community
            of lifelong learners. At Adacode Solutions, we don't just teach; we
            inspire, transform, and empower for a future of limitless
            possibilities.
          </p>
        </div>

           */}
      </div>
    </div>
  );
}

export default About;
