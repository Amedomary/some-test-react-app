import axios from 'axios';

const apiURL = 'http://dataservice.accuweather.com/currentconditions/v1';

const api = {
  getWeather: () => '/294021/historical/24?apikey=kPb0pp4Y9fopfqcJRICOVzJCfhTvl2nE&metric=true',
};

const axiosApi = axios.create({
  baseURL: apiURL,
});

export {
  axiosApi,
  api,
};
