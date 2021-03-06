/**
 * Require a module if possible.
 * @memberof module:coz/lib
 * @function _requireSafely
 * @param {string} name - Name to require
 * @private
 */

'use strict'

const path = require('path')

/** @lends _requireSafely */
function _requireSafely (name) {
  let requirable = !!name && (typeof name === 'string')
  if (!requirable) {
    return null
  }
  try {
    require.resolve(name)
    return require(name)
  } catch (e) {
    let resolved = path.resolve(name)
    if (resolved !== name) {
      return _requireSafely(resolved)
    } else {
      return null
    }
  }
}

module.exports = _requireSafely;
