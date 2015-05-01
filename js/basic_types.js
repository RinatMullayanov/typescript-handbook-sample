// simple types
var isDone = false;
var heigth = 6;
var name = 'Rinat';
var test;
test = 1;
var check = 1;
// Array types can be writte in one of two ways:
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = 1 /* Red */;
console.log(Color[2]);
// Any type - like js
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var listMixTypes = [1, true, 'free'];
// Void
function warnUser() {
    console.log('This is my warning message');
}
//# sourceMappingURL=basic_types.js.map