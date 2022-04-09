// Logger.js

// This is a function that will be saved in this module as info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

// This is a function that will be saved in this module as verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
*/