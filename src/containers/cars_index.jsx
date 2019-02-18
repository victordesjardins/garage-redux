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
          <Link to={`/cars/${car.id}`} className="card-product" key={car.id}>
            <img src="https://kckdata.io/i/fea/86d/b6d/porsche-porsch-boxster-3-type-981-2-7i-265-ch-pdk-1_800x430.jpg" alt="" />
            <div className="card-product-infos">
              <h2>{car.brand} - {car.model}</h2>
              <p>Owner: {car.owner}</p>
            </div>
          </Link>
        );
      })
    );
  }

  render () {
    return (
      <div className="container flex">
        <div className="left-side">
          <img src="http://www.garage-milliancourt.fr/img/garage-albertville-06.jpg" className="garage-img" alt=""/>
          <div className="garage-logo">
            <img className="wagon-logo" src="http://findyourway.co/wp-content/uploads/2018/03/white_logo_red_circle.png" alt=""/>
          </div>
          <div className="garage-presentation">
            <div className="content">
              <h1>Johnny's Garage</h1>
              <h2>Your best garage in town. Bring me your car and I will fix it faster than anyone else</h2>
            </div>
          </div>
          <Link to="/cars/new" className="btn btn-add">
            Add a new car
          </Link>
        </div>
        <div className="right-side">
          {this.renderCar()}
        </div>
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
