'use strict';

const validator = (req, res, next) => {
  if(req.query.name){
    next();
  } else {
    next('Must have a name property!');
  }
};

module.exports = validator;