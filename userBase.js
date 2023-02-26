const User = require('./user');

class UserBase {
  constructor(users) {
    this.users = users;
  } 

    getCount() {
      return this.users.length;
  }

  getNames() {
    return this.users.map((name) => {
      return name.getName()
    });
  }

  getIntroductions() {
    return this.users.map((name) => {
    return name.getIntroduction();
    });  
  }
}
module.exports = UserBase;

/* > > 
➜  javascript-fundamentals git:(main) ✗ node
Welcome to Node.js v19.6.1.
Type ".help" for more information.
> const User = require('./User');
undefined
> const UserBase = require('./UserBase');
undefined
> const users = [
...   new User('Uma'),
...   new User('Josh'),
...   new User('Ollie')
... ];
undefined
> const userBase = new UserBase(users);
undefined
> userBase.getCount
[Function: getCount]
> userBase.getCount()
3
> userBase.getNames()
[ 'Uma', 'Josh', 'Ollie' ]
> userBase.getIntroductions()
[ 'Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie' ]*/
