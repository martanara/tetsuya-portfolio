import React from 'react';

import "./styles.scss";

interface IHeroBannerProps {
  mediaType: string;
  src: string;
}

const HeroBanner: React.FC<IHeroBannerProps> = ({ mediaType, src }) => {
  return (
    <div className="hero-banner">
      {mediaType === 'video' ? (
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={src} alt="Hero Banner" className="hero-image" />
      )}
    </div>
  );
};

export default HeroBanner;