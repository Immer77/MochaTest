const { assert } = require("chai");
const { expect } = require("chai");

class Stack{
    constructor(){
        this.top = -1;
        this.items = [];

    }

    peek(){
        return this.items[this.top];
    }

    push (value) {
        this.top +=1
        this.items[this.top] = value; 
    }



}

describe("My Stack", () => {
    let stack;
    beforeEach(() =>{
        stack = new Stack();
    })

    it("Instansiate Stack and make sure its empty", function() {
        
        expect(stack.top).to.be.equal(-1);
        assert.typeOf(stack.items, 'array');
    });

    it("Stacks can be pushed to the top", function() {
        stack.push('Prut');
        expect(stack.top).to.be.equal(0);
        expect(stack.peek()).to.be.equal('Prut');
    })
})