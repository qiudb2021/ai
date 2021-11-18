function Queue() {
    this.items = [];
}

/** 入队 */
Queue.prototype.enqueue = function (element) {
    this.items.push(element);
}

Queue.prototype.dequeue = function () {
    if (this.isEmpty()){
        return null
    }
    return this.items.shift();
}

Queue.prototype.front = function () {
    if (this.isEmpty()) {
        return null;
    }
    return this.items[0]
}

Queue.prototype.isEmpty = function () {
    return this.size() == 0;
}

Queue.prototype.size = function () {
    return this.items.length;
}

Queue.prototype.toJSON = function () {
    return this.items.toString();
}

module.exports = Queue;