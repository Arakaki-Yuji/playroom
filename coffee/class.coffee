class User
  statusList: 'HelloWorld'
  _statusList = 'Goodbye'

  get: ()->
    return _statusList

user = new User
console.log user.statusList
console.log user._statusList
console.log user.get()
