import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';

import clearIcon from './close.svg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  clear: {
    flex: 1,
    display: 'flex',
    width: '14px',
    height: '14px',
    opacity: 0.56,
    cursor: 'pointer',
  },
  input: {
    flex: 6,
    padding: '8px 12px',
    border: 'none',
    background: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: '1.1em',
    borderBottom: 'solid 1px rgba(255,255,255,0.3)',
  },
  icon: {
    flex: 1,
    display: 'flex',
    width: '20px',
    height: '20px',
    opacity: 0.64,
  },
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  updateValue(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  mouseEnter() {
    TweenLite.to(this.closeIcon, 0.2, { scale: 1.1, opacity: 1 });
  }

  mouseLeave() {
    TweenLite.to(this.closeIcon, 0.2, { scale: 1, opacity: 0.56 });
  }

  render() {
    const { label, icon } = this.props;
    const { value } = this.state;
  
    return (
      <div style={styles.container}>
        <img style={styles.icon} src={icon} alt="search icon" />
        <input style={styles.input} value={value} placeholder={label} onChange={(e) => { this.updateValue(e.target.value); }} />
        <div 
          ref={c => this.closeIcon = c}
          style={styles.clear}
          onClick={() => { this.updateValue(''); }}
          role="button"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <img src={clearIcon} alt="clear icon" />
        </div>
      </div>
    );
  }
}

InputField.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
