const path = require('path')
function _path(str) {
  return path.resolve(__dirname, '../' + str)
}

module.exports = {
  _path
}