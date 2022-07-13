// First in First out 

function Queue () {
    collection = []

    this.print = function() {
        console.log(collection)
    }
    this.enquene = function (element) {
        collection.push(element)
    }
    this.dequeue = function() {
        return collection.shift()
    }

    this.front = function () {
        return collection[0]
    }

    this.size = function () {
        return collection.length
    }

    this.isEmpty = function () {
        return(collection.length === 0)
    }
}

let testQ = new Queue()

testQ.print()
testQ.enquene(1)
testQ.enquene(2)
testQ.enquene(3)
testQ.enquene(4)
testQ.enquene(5)
testQ.enquene(6)

testQ.dequeue()
testQ.dequeue()
testQ.dequeue()

testQ.print()