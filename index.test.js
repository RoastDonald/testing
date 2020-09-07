const searchGoogle = require('./index');

db = ['test', 'test1'];

describe('google search', () => {
  it('is a silly test', () => {
    expect('hello').toBe('hello');
  });

  it('searching google', () => {
    expect(searchGoogle('testtest', db)).toEqual([]);
    expect(searchGoogle('test', db)).toEqual(['test', 'test1']);
  });

  it('is working with null and undefined', () => {
    expect(searchGoogle(null, db)).toEqual([]);
    expect(searchGoogle(undefined, db)).toEqual([]);
  });

  it('doesnt return more than 3 matches', () => {});
});
