// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com';
const CREATE_CAR = "CREATE_CAR";

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_CARS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function createCar(car, garage, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const body = car;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(callback);

  return {
    type: CREATE_CAR,
    payload: promise
  };
}

export function fetchCar(id) {
  const url = `${BASE_URL}/cars/${id}`;
  const promise = fetch(url)
    .then(r => r.json());
  return {
    type: 'FETCH_CAR',
    payload: promise // Will be resolved by redux-promise
  };
}
