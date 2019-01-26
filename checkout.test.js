"use strict";

import { Item, Price, Checkout } from "./checkout";

test("without scanning in items, the total should come to 0", () => {
    const checkout = createCheckout();
    const total = checkout.total();
    expect(total).toBe(0);
});

test("scanning in one A should come to 50", () => {
    const checkout = createCheckout();
    checkout.scan("A");
    const total = checkout.total();
    expect(total).toBe(50);
});

test("scanning in A and B should come to 80", () => {
    const checkout = createCheckout();
    checkout.scan("A");
    checkout.scan("B");
    const total = checkout.total();
    expect(total).toBe(80);
});

test("scanning one of each item should come to 115", () => {
    const checkout = createCheckout();
    checkout.scan("A");
    checkout.scan("B");
    checkout.scan("C");
    checkout.scan("D");
    const total = checkout.total();
    expect(total).toBe(115);
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