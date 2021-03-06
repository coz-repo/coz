/**
 * Handle clean command.
 * @memberof module:coz/lib/commands
 * @function clean
 * @param {string} filename - Source filename. Could be glob pattern.
 * @param {object} options - Optional settings.
 * @param {boolean} [options.verbose=false] - Log verbose.
 * @param {function} [callback] - Callback when done.
 */

'use strict'

const create = require('../create')
const fs = require('fs')

/** @lends clean */
async function clean (filename, options) {
  options = options || {}
  const coz = create(options.configuration)
  return await coz.clean(filename, {
    verbose: !!options.verbose
  })
}

clean.help = fs.readFileSync(`${__dirname}/helps/clean-help.txt`, 'utf-8')

module.exports = clean
