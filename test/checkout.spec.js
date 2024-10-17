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