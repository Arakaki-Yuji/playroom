ValidationError = require('./validation_error');

function ModelValidator(){
  this.errors = new Array();

  this.setValidator = function(self, validator, funcsName, validFuncName){
    if(self[funcsName] == undefined){
      self[funcsName] = new Array();
    }
    self[funcsName].push(validator);

    if(self[validFuncName] == undefined){
      self[validFuncName] = function(){
        for(var i = 0; i < self[funcsName].length; i++){
          self[funcsName][i]();
        }
      }
    }
  }
};

ModelValidator.prototype.maxlength = function(attrName, options){
  var self = this;

  var methodName = String(attrName) + 'CheckMaxLength';
  var validFuncsName = String(attrName) + 'CheckFuncs';
  var validFunc = String(attrName) + 'IsValid';
  var targetValue = this[attrName];
  var defaultMsg = attrName + ' length must be less than ' + String(options['length']) + '.';

  // options
  var length  = options['length'];
  var message = options['message'] != undefined ? options['message'] : defaultMsg ;

  self[methodName] = function(){
    error = null;
    if(targetValue.length > length){
      error = new ValidationError(attrName, message);
      self.errors.push(error);
    }

    return error;
  };
  self.setValidator(self, self[methodName], validFuncsName, validFunc);
}

ModelValidator.prototype.presence = function(attrName, options){
  var self = this;
  var methodName = String(attrName) + 'CheckPresence';
  var validFuncsName = String(attrName) + 'CheckFuncs';
  var validFunc = String(attrName) + 'IsValid';
  var targetValue = this[attrName];
  var defaultMsg = attrName + ' length must be presence.';

  // options
  var message = options['message'] != undefined ? options['message'] : defaultMsg ;

  // バリデーションの実装
  self[methodName] = function(){
    error = null;
    if(Moji.isBlank(targetValue) == true){
      error = new ValidationError(attrName, message);
      self.errors.push(error);
    }
    return error;
  }
  self.setValidator(self, self[methodName], validFuncsName, validFunc);
}


module.exports = ModelValidator
