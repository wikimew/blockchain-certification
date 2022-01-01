"use strict";

const Log = type => text => {
  console.log(text);
};

module.exports = {
  Print: Log(),
  Error: Log(),
  Info: Log(),
  Warning: Log(),
  Debug: Log(),
  Logger: Log()
};
