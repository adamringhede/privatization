privatization
=============

Add encapsulation to objects in Javascript.

### Example definition
```JS
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
