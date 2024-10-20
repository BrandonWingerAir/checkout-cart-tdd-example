const Checkout = require('../checkout.js');
var expect = require('chai').expect;

var checkout;

beforeEach(function(){
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
});

it('Calculate current total', function(){
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Add multiple items in total', function(){
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('Add discount rule', function(){
    checkout.addDiscount('a', 3, 3);
});

it('Apply discounts in total', function(){
    checkout.addDiscount('a', 3, 2);

    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');

    expect(checkout.calculateTotal()).to.equal(2);
});

it('Throw exception if item added without price', function(){
    expect(function(){
        checkout.addItem('c')
    }).to.throw();
});