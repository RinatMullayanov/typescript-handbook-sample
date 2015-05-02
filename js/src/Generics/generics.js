//Hello World of Generics
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
// Here we use /type argument inference/, that is, we want the compiler to set the value of T for us
// automatically based on the type of the argument we pass in
var output2 = identity("myString"); // type of output will be 'string'
//# sourceMappingURL=generics.js.map