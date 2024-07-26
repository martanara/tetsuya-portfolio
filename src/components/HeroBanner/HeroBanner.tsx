import React from 'react';

import "./styles.scss";

interface IHeroBannerProps {
  mediaType: "video" | "image";
  src?: string;
  title?: string;
  linkText?: string;
}

interface IHeroBannerDescriptionProps {
  title?: string;
  linkText?: string;
}

const HeroBanner: React.FC<IHeroBannerProps> = ({ mediaType, src, title, linkText }) => {
  if (!src) return (
    <div className="hero-banner">
      {(title || linkText) && (<HeroBannerDescription title={title} linkText={linkText} />)}
    </div>
  );

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
          {(title || linkText) && (<HeroBannerDescription title={title} linkText={linkText} />)}
        </React.Fragment>
      )}
    </div>
  );
};

export default HeroBanner;

const HeroBannerDescription: React.FC<IHeroBannerDescriptionProps> = ({ title, linkText }) => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="hero-description">
      {title && (<div className="title"><h1>{title}</h1></div>)}
      {linkText && (<div className="hero-link "><a href="/">{linkText}</a></div>)}
      {!linkText &&
        (<div className="down-arrow" onClick={handleScrollDown}>
          <img className="icon" src={`${process.env.PUBLIC_URL}/icons/arrow_circle_down-icon.svg`} alt="arrow down" />
        </div>
        )}
    </div>
  );
};