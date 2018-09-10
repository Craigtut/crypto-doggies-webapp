import React, { Component } from 'react';
import { Container, Col as Column, Row } from 'react-grid-system';
import { connect } from 'react-redux';

import { getDogsAction } from '../../Redux/Actions/dogs';
import DogTile from '../../Components/DogTile';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  breedTitle: {
    textTransform: 'capitalize',
    margin: '0 0 24px 0',
  },
  gridScroll: {
    overflow: 'scroll',
  },
};

class BreedGrid extends Component {
  componentDidMount() {
    this.loadDogData();
  }
  
  componentDidUpdate(prevProps) {
    const sameBreed = (prevProps.match.params.breed === this.props.match.params.breed);
    const sameSubBreed = (prevProps.match.params.subBreed === this.props.match.params.subBreed);
    if (!sameBreed || !sameSubBreed) {
      this.loadDogData();
    }
  }

  loadDogData() {
    const { dogs, getDogsAction, match } = this.props;
    const { breed, subBreed } = match.params;
    const subBreedKey = (subBreed) ? `${breed}-${subBreed}` : null;

    const specificDogs = dogs[subBreedKey || breed];
    if (!specificDogs || specificDogs.error) {
      getDogsAction(breed, subBreed);
    }
  }

  renderLoading() {
    const items = [];
    for (let i = 0; i < 25; i++) {
      items.push(
        <Column key={`loading-${i}`} lg={4} md={6} sm={12}>
          <DogTile loading index={i} />
        </Column>
      );
    }
    return items;
  }

  renderGridItems(dogs) {
    if (dogs.loading) return this.renderLoading();
    if (dogs.error || !dogs.data) return <p>Something went wrong...</p>;

    return dogs.data.map((dog, i) => {
      return (
        <Column key={`${dog.name}-${i}`} lg={4} md={6} sm={12}>
          <DogTile name={dog.name} image={dog.image} />
        </Column>
      );
    });
  }

  render() {
    const { match, dogs } = this.props;
    const { breed, subBreed } = match.params;
    const subBreedKey = (subBreed) ? `${breed}-${subBreed}` : null;
    if (!dogs[subBreedKey || breed]) return null;

    return (
      <div style={styles.container}>
        <h1 style={styles.breedTitle}>{subBreed || breed}</h1>
        <div style={styles.gridScroll}>
          <Container fluid>
            <Row>
              {this.renderGridItems(dogs[subBreedKey || breed])}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ dogs }) {
  return { dogs };
}

export default connect(mapStateToProps, { getDogsAction })(BreedGrid);
