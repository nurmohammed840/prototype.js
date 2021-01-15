interface Array<T> {
    windows(size: number): T[];
};

Array.prototype.windows = function (size) {
    let data = [];
    const totalChild = 1 + this.length - size;
    for (let i = 0; i < totalChild; i++) {
        data.push(this.slice(i, size + i));
    }
    return data;
}