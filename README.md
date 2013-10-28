privatization
=============

Add encapsulation to prototypes in Javascript.

### Example definition
```JS
function Person(n) {
    this._name = n;
    private(this, '_');
}
Person.prototype._format = function () {
    return 'Hi, my name is ' + this.name;
};
Person.prototype.greet = function () {
    alert(
        this.format()
    );
};

```
