import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render () {
    console.log(this.props)
    return (
      this.props.cars.map((car) => {
        return (
          <div className="car">
            <p>{car.brand} - {car.model}</p>
            <p>Owner: {car.owner}</p>
          </div>
        );
      })
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
