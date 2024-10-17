const Checkout = require('../checkout.js');

var expect = require('chai').expect;

it('Add item price', function(){
    var checkout = new Checkout();
    checkout.addItemPrice('a', 1);
});