function User(data){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
}

function Validator(){
    this.errorMsg = null;

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
}

Validator.prototype.maxlength = function(attrName, length){
    var self = this;
    var methodName = String(attrName) + 'checkLength';
    var validFuncsName = String(attrName) + 'checkFuncs';
    var validFunc = String(attrName) + 'IsValid';
    var targetValue = this[attrName];

    self[methodName] = function(){
        if(targetValue.length > length){
            self.errorMsg = attrName + ' length must less than ' + String(length) + '.';
        }
    };
    self.setValidator(self, self[methodName], validFuncsName, validFunc);
}

User.prototype = new Validator;

var user = new User({firstName: 'yuji', lastName: 'arakaki', age: 27});
user.maxlength('firstName', 2)
user.firstNameIsValid();
console.log(user);
