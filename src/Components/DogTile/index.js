import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';

import { Colors, Shadows } from '../../Theme';

const styles = {
  cardTile: {
    borderRadius: '16px',
    marginBottom: '24px',
    overflow: 'hidden',
    width: '100%',
    background: Colors.black,
    ...Shadows.three,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '57.25%',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
  },
  name: {
    position: 'relative',
    width: '100%',
    padding: '12px',
    textAlign: 'center',
  },
};

class DogTile extends Component {
  componentDidMount() {
    const { index } = this.props;
    if (this.loading) {
      TweenMax.to(this.loading, 1, { repeat: -1, yoyo: true, opacity: 0.4, delay: 0.1 * index, repeatDelay: 0.5 });
    }
  }

  render() {
    const { name, image, loading } = this.props;
    if (loading) {
      const addedStyle =  {
        background: Colors.white,
        opacity: 0,
      };
      return (
        <div ref={c => this.loading = c} style={{ ...styles.cardTile, ...addedStyle }}>
          <div style={styles.imageContainer} />
          <p style={{ ...styles.name, ...{ color: Colors.black } }}>Loading</p>
        </div>
      );
    }
    return (
      <div style={styles.cardTile}>
        <div style={styles.imageContainer}>
          <img style={styles.image} src={image} alt={`This is the dog named ${name}`} />
        </div>
        <p style={styles.name}>{name}</p>
      </div>
    );
  }
}

DogTile.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  loading: PropTypes.bool,
  index: PropTypes.number,
};

export default DogTile;
