const fetch = require('node-fetch');
const swapi = require('./index2');

describe('testing api calls', () => {
  it('calls swapi api to get people', () => {
    expect.assertions(1);
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
    });
  });

  it('checks recieved data from api', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
      expect(data.results.length).toBeGreaterThan(1);
      expect(data.count).toEqual(87);
    });
  });

  it('mock test', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            data: [1, 2, 3, 4, 5]
          })
      })
    );

    expect.assertions(2);
    return swapi.getPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    });
  });
});
