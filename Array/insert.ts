interface Array<T> {
    insert(index: number, ...item: T[]): any;
};

Array.prototype.insert = function (index, ...item) {
    return this.splice(index, 0, ...item);
};

