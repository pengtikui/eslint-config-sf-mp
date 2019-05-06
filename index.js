module.exports = {
  root: true,
  
  extends: ['airbnb-base'],

  globals: {
    'wx': false,
    'App': false,
    'Page': false,
    'getApp': false,
    'Component': false,
    'getCurrentPages': false,
    'getRegExp': false,
    'getDate': false,
    'Behavior': false,
  },

  env: {
    es6: true,
    node: true,
  },
};
