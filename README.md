privatization
=============

Add encapsulation to objects in Javascript.

### Install
```
npm install privatization --save
```


## Usage
The object with methods and data members that you want to encapsulate is passed in as the first argument to the function `privatize(target [, prefix])`. In the example below, the prototype is passed in. The prefix is the characters put infront of private members. The default is a single underscore. The prefix is removed after `privatize()` has been called.
```JS
var privatize = require('privatization');

function Person(n) {
    this._name = n;
    privatize(this, '_');
}
Person.prototype._format = function () {
    return 'Hi, my name is ' + this.name;
};
Person.prototype.greet = function () {
    console.log(
        this.format()
    );
};

```

### Result
```JS
var p = new Person('Adam');

p._format; // undefined
p.format; // undefined
p._name; // undefined
p.name; // undefined

p.greet(); // 'Hi, my name is Adam'
```
