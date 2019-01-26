"use strict";

export class Item {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

export class Price {
    constructor (cost) {
        this.cost = cost;
    }
}

export class Checkout {
    constructor (items) {
        this.count = 0;
        this.items = items;
    }

    scan(item) {
        this.count++;
    }

    total() {
        return this.count * 50;
    }
}