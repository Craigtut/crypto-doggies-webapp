import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  buttonContainer: {
    display: 'flex',
    height: '56px',
    width: '56px',
    borderRadius: '56px',
    justifyContent: 'center',
    alignItems: 'center',
    curser: 'pointer',
  },
  icon: {
    width: '24px',
  },
};

class FabButton extends Component {
  render() {
    const { icon, color, onClick, style } = this.props;
    return (
      <div style={{ ...styles.buttonContainer, ...{ background: color }, ...style}} onClick={onClick}>
        <img style={styles.icon} src={icon} alt="Fab Button Icon" />
      </div>
    );
  }
}

FabButton.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default FabButton;
