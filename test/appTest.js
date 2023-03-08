const assert = require('chai').assert;
const { describe } = require('mocha');
const app = require('../app');

describe("App", function() {

    describe("1: say Hello functions", function() {
        it("Checking that it returns Hello", function(){
            let result = app.sayHello();
            assert.equal(result, "Hello");   
        });
    
        it("Checking type is of String", function(){
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        });    
    });
    describe("2: Adding numbers functions", function(){
        it("add numbers should be above 5", function(){
            let result = app.addNumbers(5,5);
            assert.isAbove(result, 5);
            
        });
    
        it("add numbers should return number", function(){
            let result = app.addNumbers(5,5);
            assert.typeOf(result, "number");
            
        });
    });    
})