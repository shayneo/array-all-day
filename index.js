module.exports = function (athing) {
  if (!(athing instanceof Array)) {
    return [ athing ]
  }
  return athing
}