module.exports = function (athing) {
  return (athing instanceof Array) ? athing : [ athing ]
}