var assert = require('assert');
var privatize = require('../');

describe('privatize', function () {
  it('makes members with a certain prefix private', function () {
    function Person(n) {
       this._name = n;
       privatize(this, '_');
    }
    Person.prototype._format = function (greeting) {
      return greeting + ', my name is ' + this.name;
    };
    Person.prototype.greet = function (greeting) {
      return this.format(greeting);
    };
    var p = new Person('Adam');
    assert.equal(undefined, p._format);
    assert.equal(undefined, p.format);
    assert.equal(undefined, p._name);
    assert.equal(undefined, p.name);
    assert.equal('Yo, my name is Adam', p.greet('Yo'));
  });
});
