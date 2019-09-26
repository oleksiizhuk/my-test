import React from 'react';

const Hero = ({
  hero
}) => {
  if (!hero) {
    return <p>hero is null</p>;
  }
  return (
    Object.keys(hero).map((key) => <div key={key}>{hero[key]}</div>)

  );
};

export default Hero;
