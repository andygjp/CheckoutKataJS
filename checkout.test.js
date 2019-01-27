"use strict";

import { Item, Price, Checkout } from "./checkout";
import theoretically from 'jest-theories';

describe("scanning in different items", () => {
    const theories = [
        {input: [], expected: 0},
        {input: ["A"], expected: 50},
        {input: ["A", "B"], expected: 80},
        {input: ["A", "B", "C"], expected: 100},
        {input: ["A", "B", "C", "D"], expected: 115}
    ];
  
    theoretically("scanning in items should come to expected total", theories, x => {
        /** @type {{input:string[], expected:number}} */ 
        const theory = x;
        const checkout = createCheckout();
        theory.input.forEach(item => {
            checkout.scan(item);
        })
        const total = checkout.total();
        expect(total).toBe(theory.expected);
    });
});

function createCheckout() {
    const items = [
        new Item("A", new Price(50)),
        new Item("B", new Price(30)),
        new Item("C", new Price(20)),
        new Item("D", new Price(15))
    ];
    return new Checkout(items);
}