export class Shoppinglist {
    title: string;
    updatedAt: Date;
    items: string[];

    constructor (title: string, updatedAt: Date, items: string[]) {
        this.title = title;
        this.updatedAt = updatedAt;
        this.items = items;
    }
}
