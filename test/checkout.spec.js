const Checkout = require('../checkout.js');
var expect = require('chai').expect;

var checkout;

beforeEach(function(){
    checkout = new Checkout();
});

it('Add item price', function(){
    checkout.addItemPrice('a', 1);
});

it('Add item', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
})