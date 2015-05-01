var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
})();
// Inheritance
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + ' moved ' + meters + 'm.');
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// Accessors
var passCode = 'secret passcode';
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passCode && passCode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// Static Properties
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    } // Parameter properties:  this.scale = scale
    Grid.prototype.calcuateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(1.0);
// Advanced Techniques
// Constructor functions
var greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
// Using a class as an interface
var Point = (function () {
    function Point() {
    }
    return Point;
})();
var point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=classes.js.map