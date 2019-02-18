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
          <Link to="/" className="btn btn-add">
            Back to list
          </Link>
        </div>
        <div className="right-side">
          <div className="card-on-show">
            <img src="https://kckdata.io/i/fea/86d/b6d/porsche-porsch-boxster-3-type-981-2-7i-265-ch-pdk-1_800x430.jpg" alt="" />
            <div className="card-on-show-content">
              <h2>{this.props.car.brand} - {this.props.car.model}</h2>
              <h3>Owner: {this.props.car.owner}</h3>
              <div className="plate">
                {this.props.car.plate}
              </div>
            </div>
            <button className="delete-car" onClick={this.handleClick}>
              <i class="fas fa-trash-alt"></i> Delete car
            </button>
          </div>
        </div>
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
