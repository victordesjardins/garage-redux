import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCar() {
    return (
      this.props.cars.map((car) => {
        return (
          <div className="car" key={car.id}>
            <Link to={`/cars/${car.id}`}>
              <p>{car.brand} - {car.model}</p>
              <p>Owner: {car.owner}</p>
            </Link>
          </div>
        );
      })
    );
  }

  render () {
    return (
      <div>
        <Link to="/cars/new">
          Add a new car
        </Link>
        {this.renderCar()}
      </div>
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
