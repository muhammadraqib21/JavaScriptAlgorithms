// No duplicate Items 
// Values are not in particular item

// ES6 doesn't contain all the comman set methods 

function customSet () {
    var collection = []

    // Checks if the element exists in the array and if it does return index if not return -1 which is false 
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    this.values = function () {
        return collection 
    }

    this.add = function (element) {
        // if false add element
        if (!this.has(element)) {
            collection.push(element)
            return true 
        }

        return false 
    }

    this.delete = function (element) {
        if (!this.has(element)) {
           index = collection.indexOf(element)
           // removes element from array 
           collection.splice(index, 1)
           return true 
        }

        return false
    }
    // in es6 set size is a property not method 
    this.size = function () {
        return collection.length
    }

    // return the union of two sets 
    this.union = function(otherSet) {
        let unionSet = new customSet()
        let firstSet = this.values()
        let secondSet = otherSet.values()

        for (let [index, value] of secondSet.entries()) {
            unionSet.add(value)
        }

        for (let [index, value] of firstSet.entries()) {
            unionSet.add(value)
        }

        return unionSet

    }

    this.intersection = function (secondSet) {
        let intersectionSet = new customSet()
        
        let firstSet = this.values()

        for(let [index, value] of secondSet.values().entries()) {
            if(this.has(value)) {
                intersectionSet.add(value)
            }
        }

        return intersectionSet

    }

    this.difference = function (secondSet) {
        let differenceSet = new customSet()
        
        let firstSet = this.values()

        for(let [index, value] of secondSet.values().entries()) {
            if(!this.has(value)) {
                differenceSet.add(value)
            }
        }

        return differenceSet

    }

}

let testSet = new customSet()
let testSet2 = new customSet()
 
testSet.add(1)
testSet.add(2)
testSet.add(3)
testSet.add(4)
 

testSet2.add(5)
testSet2.add(6)
testSet2.add(1)
testSet2.add(4)

console.log(testSet.difference(testSet2).values())