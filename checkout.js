"use strict";

export class Item {
    constructor (name, price) {
        this.name = name;
        /** @type {Price} */
        this.price = price;
    }

    getCost() {
        return this.price.getCost();
    }
}

export class Price {
    constructor (cost) {
        this.cost = cost;
    }

    getCost() {
        return this.cost;
    }
}

export class Checkout {
    constructor (items) {
        this.scannedItems = [];
        /** @type {Item[]} */
        this.items = items;
    }

    scan(item) {
        this.scannedItems.push(item);
    }

    total() {
        return this.scannedItems
            .map(item => this.items.find(x => x.name === item).getCost())
            .reduce((subTotal, cost) => subTotal + cost, 0);
    }
}