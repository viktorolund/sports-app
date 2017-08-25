const winston = require("winston");

const Logger = new winston.Logger({
  transports: [new winston.transports.Console()]
});

module.exports = Logger;
