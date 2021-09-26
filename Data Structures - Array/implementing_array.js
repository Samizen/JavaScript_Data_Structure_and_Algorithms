class Array {
    constructor() {
        this.length = 0;
        this.data = {};  // an object
    }

    // Access the Data:
    get(index) { // O(1)
        return this.data[index];
    }

    push(item) { // O(1)
        this.data[this.length] = item;
        this.length++;
        return this.length;
    } 
    pop() { // O(1)
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index) { // O(1)
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems() { // O(n)
        for(let i = 0; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new Array();

console.log(newArray.get(0));
console.log(newArray.push(22));
console.log(newArray.push(24));
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);