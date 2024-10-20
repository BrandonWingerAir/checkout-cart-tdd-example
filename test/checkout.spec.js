const Checkout = require('../checkout.js');
var expect = require('chai').expect;

var checkout;

beforeEach(function(){
    checkout = new Checkout();
});

it('Calculate current total', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Add multiple items in total', function(){
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Can add discount rule', function(){
    checkout.addDiscount('a', 3, 3);
});