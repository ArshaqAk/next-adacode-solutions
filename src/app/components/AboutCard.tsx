import React from "react";

interface AboutCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  imgUrl,
  title,
  description,
}) => {
  return (
    <div className="about_card">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
