import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import { Colors } from '../../Theme';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '64px',
    background: Colors.white,
    opacity: 0,
  },
  text: {
    color: Colors.black,
  },
};

class BreedItemLoading extends Component {
  componentDidMount() {
    const timeline = new TimelineMax({ repeat: -1, delay: (0.1 * this.props.index) });
    timeline.to(this.loadingItem, 1, { opacity: 0.4 });
    timeline.to(this.loadingItem, 1, { opacity: 0 });
  }

  render() {
    return (
      <div style={styles.container} ref={c => this.loadingItem = c}>
        <h5 style={styles.text}>Loading Breed...</h5>
      </div>
    );
  }
}

BreedItemLoading.propTypes = {
  index: PropTypes.number,
};

export default BreedItemLoading;
