import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import { TweenLite, TimelineLite } from 'gsap';

import { Colors } from '../../Theme';
import dogIcons from './icons';

class BreedItem extends Component {
  constructor(props) {
    super(props);
    const randomInt = Math.floor(Math.random() * Math.floor(Colors.random.length));
    this.color = Colors.random[randomInt];

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    const timeline = new TimelineLite();
    timeline.to(this.hoverBackground, 0.1, { opacity: 1 });
    timeline.to(this.hoverBackground, 0.5, { scale: 20 });
    timeline.to(this.name, 0.4, { color: Colors.black }, 0);
  }

  mouseLeave() {
    const timeline = new TimelineLite();
    timeline.to(this.hoverBackground, 0.5, { scale: 1 });
    timeline.to(this.hoverBackground, 0.1, { opacity: 0 });
    timeline.to(this.name, 0.4, { color: (this.props.selected) ? this.color : Colors.white }, 0);
  }

  render() {
    const { breed, subBreed, selected } = this.props;
    const icon = dogIcons[breed] || dogIcons['english-mastiff'];
    const renderIcon = (!subBreed) ? <SVGInline svg={icon} fill={this.color} /> : null;

    const styles = {
      container: {
        display: 'flex',
        position: 'relative',
        height: (subBreed) ? '48px' : '64px',
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
      },
      icon: {
        width: '36px',
        marginLeft: '36px',
      },
      hoverBackground: {
        background: this.color,
        opacity: 0,
        position: 'absolute',
        borderRadius: '36px',
        left: '36px',
        top: '12px',
        height: '36px',
        width: '36px',
      },
      name: {
        flex: 1,
        paddingLeft: (subBreed) ? '36px' : '24px',
        textTransform: 'capitalize',
        color: (selected) ? this.color : Colors.white,
        opacity: (selected) ? 1 : (subBreed) ? 0.48 : 0.76,
      },
    };

    const link = (subBreed) ? `/breed/${breed}/sub/${subBreed}` : `/breed/${breed}`;

    return (
      <Link to={link}  style={styles.container} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div style={styles.hoverBackground} ref={c => this.hoverBackground = c} />
        <div style={styles.icon}>
          {renderIcon}
        </div>
        <div ref={c => this.name = c} style={styles.name}>
          <h3>
            {subBreed || breed}
          </h3>
        </div>
      </Link>
    );
  }
}

BreedItem.propTypes = {
  breed: PropTypes.string,
  subBreed: PropTypes.string,
  selected: PropTypes.bool,
};

export default BreedItem;
