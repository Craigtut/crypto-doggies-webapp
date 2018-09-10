import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BreedItem from '../BreedItem';
import BreedItemLoading from '../BreedItemLoading';

const styles = {
  list: {
    overflow: 'scroll',
    height: '100vh',
  },
};

class BreedList extends Component {
  render() {
    const { breeds, showAll, selectedBreed, selectedSubbreed, filter, error, loading, onSelection } = this.props;

    if (loading) {
      const items = [];
      for (let i = 0; i < 20; i++) {
        items.push(<BreedItemLoading key={`${i}-loading`} index={i} />);
      }

      return (
        <div style={styles.loadingContainer}>
          {items}
        </div>
      );
    }
    if (error || !breeds) return <div>Something went wrong...</div>;

    const breedsArray = Object.keys(breeds);
    const renderItems = [];
    for (let i = 0; i < breedsArray.length; i++) {
      const matching = breedsArray[i].toLowerCase().includes(filter.toLowerCase());
      if (matching || filter === '') {
        renderItems.push(<BreedItem key={breedsArray[i]} breed={breedsArray[i]} selected={(selectedBreed === breedsArray[i])} />);
        if (showAll || selectedBreed === breedsArray[i]) {
          breeds[breedsArray[i]].forEach((subBreed) => {
            renderItems.push(<BreedItem key={`${i}-${subBreed}`} breed={breedsArray[i]} subBreed={subBreed} selected={(selectedSubbreed === subBreed)} />);
          });
        }
      }
    }

    return (
      <div style={styles.list} onClick={onSelection}>
        {renderItems}
      </div>
    );
  }
}

BreedList.propTypes = {
  breeds: PropTypes.object,
  showAll: PropTypes.bool,
  selectedBreed: PropTypes.string,
  selectedSubbreed: PropTypes.string,
  filter: PropTypes.string,
  loading: PropTypes.bool,
  onSelection: PropTypes.func,
};

export default BreedList;
