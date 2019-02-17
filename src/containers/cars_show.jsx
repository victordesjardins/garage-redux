import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCar, deleteCar } from '../actions';


class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h3>{this.props.car.brand}</h3>
        <Link to="/">
          Back
        </Link>
        <button onClick={this.handleClick}>
          Delete car
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar, deleteCar },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
