import React from 'react';

import "./styles.scss";

interface IHeroBannerProps {
  mediaType: "video" | "image";
  src: string;
  title?: string;
}

const HeroBanner: React.FC<IHeroBannerProps> = ({ mediaType, src, title }) => {
  return (
    <div className={`hero-banner ${mediaType}`}>
      {mediaType === 'video' ? (
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <React.Fragment>
          <img src={src} alt="Hero Banner" className="hero-image" />
          {title && (<h1>{title}</h1>)}
        </React.Fragment>
      )}
    </div>
  );
};

export default HeroBanner;