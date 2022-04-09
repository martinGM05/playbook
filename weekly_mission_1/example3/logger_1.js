/* 
    This also the declaration of a function 

    module.exports will make you able to call this function in another script like:
    > const logger = require('./logger')

    and use it like:

    > logger("Heeey!")
*/

module.exports = (message) => {
    console.log(`Info: ${message}`)
}