interface Array<T> {
    chunks(size: number): T[];
};

Array.prototype.chunks = function(size) {
    let copied = [...this];
    let data = [];
    const totalChild = Math.ceil(copied.length / size);
    for (let i = 0; i < totalChild; i++) {
        data.push(copied.splice(0, size));
    }
    return data;
};
