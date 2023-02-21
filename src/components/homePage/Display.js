import React from 'react';

import classes from '../pages/Themes.module.css';

const Display = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={classes.themes_images}
      style={{ marginLeft: '1px', marginBottom: '1px' }}
    />
  );
};

export default Display;
