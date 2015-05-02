var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var myIdentity2 = identity;
var output = identity("myString"); // type of output will be 'string'
// Here we use /type argument inference/, that is, we want the compiler to set the value of T for us
// automatically based on the type of the argument we pass in
var output2 = identity("myString"); // type of output will be 'string'
//Generic Classes
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
//Using Class Types in Generics
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
})();
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
})();
var Animal = (function () {
    function Animal() {
    }
    return Animal;
})();
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
})(Animal);
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
})(Animal);
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag; // typechecks!
//# sourceMappingURL=generics.js.map