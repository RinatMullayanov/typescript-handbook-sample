//Hello World of Generics
function identity<T>(arg: T): T {
  return arg;
}

var output = identity<string>("myString");  // type of output will be 'string'
// Here we use /type argument inference/, that is, we want the compiler to set the value of T for us
// automatically based on the type of the argument we pass in
var output2 = identity("myString");  // type of output will be 'string'