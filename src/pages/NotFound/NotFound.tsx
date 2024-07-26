import React from "react";

import HeroBanner from "components/HeroBanner";

import "./styles.scss";

const NotFound = () => {
  return (
    <HeroBanner
      mediaType="image"
      title="The page you're looking for doesn't exist"
      linkText="Go to Homepage"
    />
  );
};

export default NotFound;