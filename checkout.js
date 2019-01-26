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
        this.items = items;
    }

    scan(item) {

    }

    total() {
        return 50;
    }
}