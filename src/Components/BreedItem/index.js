import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dogIcons from './icons';
import styles from './styles.scss';

class BreedItem extends Component {

  render() {
    const { breed, subBreed } = this.props;
    const icon = dogIcons[breed] || dogIcons['english-mastiff'];
    const renderIcon = (!subBreed) ? <img src={icon} alt={`${breed} icon`} /> : null;

    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          {renderIcon}
        </div>
        <div className={styles.name}>{subBreed || breed}</div>
      </div>
    );
  }
}

BreedItem.propTypes = {
  breed: PropTypes.string,
  subBreed: PropTypes.string,
};

export default BreedItem;
