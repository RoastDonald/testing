const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeople = async fetch => {
  const getResponse = await fetch('https://swapi.co/api/people');
  const data = await getResponse.json();
  return {
    count: data.count,
    results: data.results
  };
};

module.exports = {
  getPeople,
  getPeoplePromise
};
