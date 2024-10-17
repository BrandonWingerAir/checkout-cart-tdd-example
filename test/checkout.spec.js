const Checkout = require('../checkout.js');

var expect = require('chai').expect;

it('Instantiate checkout', function(){
    var checkout = new Checkout();
});

it('Add item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
});