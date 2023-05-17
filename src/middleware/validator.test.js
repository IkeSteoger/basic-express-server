'use strict';

const validator = require('./validator');

describe('Validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  test('Errors when no name query', () => {
    req = { query: { name: null }};
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Must have a name property!');
  });
});