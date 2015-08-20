function ValidationError(attr, message){
  this.attr = attr
  this.message = message
}

module.exports = ValidationError
