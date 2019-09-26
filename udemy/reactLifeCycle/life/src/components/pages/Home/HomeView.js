import React from 'react';

import HeroView from './components/heroView';
import ButtonClick from './components/ButtonClick';

const HomeView = ({
  hero,
  onHandleClickButton, currentValue
}) => {
  // eslint-disable-next-line no-console

  return (
    <>
      <HeroView
        hero={hero}
      />
      <ButtonClick
        onHandleClickButton={onHandleClickButton}
        currentValue={currentValue}
      />
    </>
  );
};


export default HomeView;
