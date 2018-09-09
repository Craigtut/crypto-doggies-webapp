import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getBreedsAction } from '../../Redux/Actions/breeds';
import styles from './styles.scss';
import BreedItem from '../../Components/BreedItem';

class BreedNavigation extends Component {
  componentDidMount() {
    const { breeds, loading, getBreedsAction } = this.props;
    if (!breeds && !loading) {
      getBreedsAction();
    }
  }

  renderList() {
    const { breeds, mobile, match } = this.props;
    const breedsArray = Object.keys(breeds);
    const currentlySelectedBreed = match.params.breedId;
    const renderItems = [];
    for (let i = 0; i < breedsArray.length; i++) {
      renderItems.push(<BreedItem breed={breedsArray[i]} />);
      if (mobile || currentlySelectedBreed === breedsArray[i]) {
        const renderSubbreed = breeds[breedsArray[i]].map(subBreed => <BreedItem breed={breedsArray[i]} subBreed={subBreed} />);
        renderItems.concat(renderSubbreed);
      }
    }
    return renderItems;
  }

  renderMenu() {
    const { loading, error, breeds } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error || !breeds) return <div>Something went wrong...</div>;

    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

  renderNormal() {
    return (
      <div className={styles.screenContainer}>
        {this.renderMenu()}
      </div>
    );
  }

  renderMobile() {
    return (
      <div className={styles.mobileContainer}>
        {this.renderMenu()}
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
