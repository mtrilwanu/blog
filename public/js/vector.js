(function() {
  Harry.Vector = (function() {
    var name, _fn, _i, _len, _ref;
    _ref = ['add', 'subtract', 'multiply', 'divide'];
    _fn = function(name) {
      return Vector[name] = function(a, b) {
        return a.copy()[name](b);
      };
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      _fn(name);
    }
    function Vector(x, y, z) {
      var _ref;
      if (x == null) {
        x = 0;
      }
      if (y == null) {
        y = 0;
      }
      if (z == null) {
        z = 0;
      }
      _ref = [x, y, z], this.x = _ref[0], this.y = _ref[1], this.z = _ref[2];
    }
    Vector.prototype.copy = function() {
      return new Harry.Vector(this.x, this.y, this.z);
    };
    Vector.prototype.magnitude = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector.prototype.normalize = function() {
      var m;
      m = this.magnitude();
      if (m > 0) {
        this.divide(m);
      }
      return this;
    };
    Vector.prototype.limit = function(max) {
      if (this.magnitude() > max) {
        this.normalize();
        return this.multiply(max);
      } else {
        return this;
      }
    };
    Vector.prototype.heading = function() {
      return -1 * Math.atan2(-1 * this.y, this.x);
    };
    Vector.prototype.distance = function(other) {
      var dx, dy, dz;
      dx = this.x - other.x;
      dy = this.y - other.y;
      dz = this.z - other.z;
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    Vector.prototype.subtract = function(other) {
      this.x -= other.x;
      this.y -= other.y;
      this.z -= other.z;
      return this;
    };
    Vector.prototype.add = function(other) {
      this.x += other.x;
      this.y += other.y;
      this.z += other.z;
      return this;
    };
    Vector.prototype.divide = function(n) {
      var _ref;
      _ref = [this.x / n, this.y / n, this.z / n], this.x = _ref[0], this.y = _ref[1], this.z = _ref[2];
      return this;
    };
    Vector.prototype.multiply = function(n) {
      var _ref;
      _ref = [this.x * n, this.y * n, this.z * n], this.x = _ref[0], this.y = _ref[1], this.z = _ref[2];
      return this;
    };
    Vector.prototype.invalid = function() {
      return this.x === Infinity || isNaN(this.x) || this.y === Infinity || isNaN(this.y) || this.z === Infinity || isNaN(this.z);
    };
    return Vector;
  })();
}).call(this);
