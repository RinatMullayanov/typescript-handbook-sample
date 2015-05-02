//Hello World of Generics
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

var myIdentity: <T>(arg: T)=>T = identity;
var myIdentity2: GenericIdentityFn = identity;

var output = identity<string>("myString");  // type of output will be 'string'
// Here we use /type argument inference/, that is, we want the compiler to set the value of T for us
// automatically based on the type of the argument we pass in
var output2 = identity("myString");  // type of output will be 'string'

//Generic Classes
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

//Generic Constraints
interface  Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});

//Using Class Types in Generics
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (a: {new(): A;
  prototype: {keeper: K}}): K {

  return a.prototype.keeper;
}

findKeeper(Lion).nametag;  // typechecks!