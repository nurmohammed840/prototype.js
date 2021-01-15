interface Array<T> {
    remove(index: number): number | undefined;
};

Array.prototype.remove = function (index) {
    return this.splice(index, 1)?.[0];
};