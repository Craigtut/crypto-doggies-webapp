import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, matchPath, Link } from 'react-router-dom';
import { TweenLite } from 'gsap';

import searchIcon from './search.svg';
import menuIcon from './menu.svg';
import { Colors } from '../../Theme';
import BreedList from '../../Components/BreedList';
import InputField from '../../Components/InputField';
import FabButton from '../../Components/FabButton';
import { getBreedsAction } from '../../Redux/Actions/breeds';

const styles = {
  normal: {
    flex: 2,
  },
  mobileContainer: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
  },
  mobileSlider: {
    position: 'fixed',
    transform: 'translateX(-100%)',
  },
  menuContainer: {
    background: Colors.black,
  },
  header: {
    padding: '36px',
  },
  logo: {
    margin: '8px 0 48px',
  },
  fab: {
    position: 'fixed',
    bottom: '24px',
    left: '24px',
  },
};

class BreedNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '', showMenu: false };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    const { breeds, loading, getBreedsAction } = this.props;
    if (!breeds && !loading) {
      getBreedsAction();
    }
  }

  toggleMobileMenu() {
    const { showMenu } = this.state;
    const menuPosition = (!showMenu) ? '0%' : '-100%';
    TweenLite.to(this.mobileMenu, 0.4, { x: menuPosition });
    console.log('clicked', this.mobileMenu)
    this.setState({ showMenu: !showMenu });
  }

  renderMenu() {
    const { loading, error, breeds, location, mobile } = this.props;
    // a weird odd hack to get access to the params outside my switch. Likely a better solution but for now this will work.
    const match = matchPath(location.pathname, { path: '/breed/:breed/', exact: true }) || matchPath(location.pathname, { path: '/breed/:breed/sub/:subBreed', exact: true });

    const { breed, subBreed } = (match) ? match.params : { breed: null, subBreed: null };
    
    return (
      <div style={styles.menuContainer}>
        <div style={styles.header}>
          <Link to="/">
            <div style={styles.logo}>
              CryptoDoggies
            </div>
          </Link>
          <h4 style={{ marginBottom: '8px' }}>Breeds of CryptoDoggies</h4>
          <InputField label="Search" icon={searchIcon} onChange={(value) => { this.setState({ filter: value }); }} />
        </div>
        <BreedList
          onSelection={this.toggleMobileMenu}
          filter={this.state.filter}
          breeds={breeds}
          selectedBreed={breed}
          selectedSubbreed={subBreed}
          showAll={mobile}
          loading={loading}
          error={error}
        />
      </div>
    );
  }

  renderNormal() {
    const { style } = this.props;
    return (
      <div style={{ ...styles.normal, ...style }}>
        {this.renderMenu()}
      </div>
    );
  }

  renderMobile() {
    const { style } = this.props;
    return (
      <div style={{ ...styles.mobileContainer, ...style }}>
        <div style={styles.mobileSlider} ref={c => this.mobileMenu = c}>
          {this.renderMenu()}
        </div>
        <FabButton icon={menuIcon} color={Colors.primary} style={styles.fab} onClick={this.toggleMobileMenu} />
      </div>
    );
  }

  render() {
    return (this.props.mobile) ? this.renderMobile() : this.renderNormal();
  }
}

BreedNavigation.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

function mapStateToProps({ breeds }) {
  return {
    breeds: breeds.data,
    error: breeds.error,
    loading: breeds.loading,
  };
}

export default withRouter(connect(mapStateToProps, { getBreedsAction })(BreedNavigation));
