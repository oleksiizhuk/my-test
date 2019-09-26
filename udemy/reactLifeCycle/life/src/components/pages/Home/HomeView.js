import React from 'react';
import PropTypes from 'prop-types';
import HeroView from './components/heroView';

const HomeView = ({
  hero
}) => {
  console.log(typeof hero)
  return (
    <HeroView
      hero={hero}
    />
  );
};

HomeView.propTypes = {
  hero: PropTypes.array
};

HomeView.propTypes = {
  hero: {}
};
export default HomeView;
