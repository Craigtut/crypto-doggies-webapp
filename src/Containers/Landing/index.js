import React, { Component } from 'react';
import logo from './Logo.svg';

const styles = {
  content: {
    display: 'flex',
    marginTop: '15%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
  },
  logo: {
    width: '30%',
    margin: '48px',
  },
};

class Landing extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1 style={{ margin: '4px 0' }}>Welcome to CryptoDoggies</h1>
        <h3 style={{ margin: '4px 0', opacity: 0.64 }}>Isn't this whole crypto everything great?</h3>
        <img style={styles.logo} src={logo} alt="Cryptodoggies logo" />
        <p style={{ marginTop: '36px', opacity: 0.48 }}>Feel free to browse all of our crypto dog breeds and see which ones you like.</p>
      </div>
    );
  }
}

export default Landing;
