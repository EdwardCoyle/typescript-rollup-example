#!/usr/env/node
var fs = require('fs');
var rimraf = require('rimraf');
rimraf('dist/tmp/**', function(err) {
  if (err) {
    return console.log(err);
  }
  return console.log('DONE!');
});
