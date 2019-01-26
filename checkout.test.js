import { Item, Price, Checkout } from "./checkout";

test("scanning in one A should come to 50", () => {
    let checkout = createCheckout();
    checkout.scan("A");
    let total = checkout.total();
    expect(total).toBe(50);
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