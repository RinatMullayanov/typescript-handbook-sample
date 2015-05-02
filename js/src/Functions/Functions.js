//Named function
function add(x, y) {
    return x + y;
}
//Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
//Typing the function
function add2(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) {
    return x + y;
};
//Writing the function type
var myAdd3 = function (x, y) {
    return x + y;
};
//Optional and Default Parameters
//? - optional
//= - default
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var result1 = buildName("Bob"); //error, too few parameters
//var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //ah, just right
//Rest Parameters
//... - rest
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var result4 = buildName2("Bob", "Adams"); //ah, just right
//Lambdas and using 'this'
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//Overloads
var suits = ["hearts", "spades", "clubs", "diamonds"];
//Note that the 'function pickCard(x): any' piece is not part of the overload list,
// so it only has two overloads: one that takes an object and one that takes a number.
// Calling 'pickCard' with any other parameter types would cause an error.
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//# sourceMappingURL=Functions.js.map