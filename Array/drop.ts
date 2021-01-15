interface Array<T> {
    drop(item: T): T | undefined;
};

Array.prototype.drop = function (item) {
    const index = this.indexOf(item);
    if (index > -1) {
        return this.splice(index, 1)?.[0];
    }
}

console.log([1, 2, 3, "2"].drop("2d"));