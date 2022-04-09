
/*
  When exporting a function/object like so:

  > module.exports.verbose

  We will be exporting the content with the name `verbose`

  module.exports will make you able to call this function in another script like:
  > const logger = require('./logger')

  and use it like:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}