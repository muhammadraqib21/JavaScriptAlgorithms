class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // inserts a new Node 
    let newNode = new Node(value)

    // if root is equal to null then root = new Node 
    // While Node not equal to null
    // Check to see if its value is higher or lower than current Node 
    // if higher current is equal to the right of the node tree and vice versa 

    if(this.root === null) {
      this.root = newNode 
      return this
    }

    let current = this.root

    while(current) {
      if(current.value === value) return null

      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode 
          return this
        }
        current = current.left
      } else {
        if(value > current.value) {
          if(current.right === null ) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }    
    }
  }

  search(value) {
    // returns Node with the given value
    let current = this.root
    while (current !== null) {
      if(value === current.value) {
        return current
      }

      if(value < current.value) {
        current = current.left 
      } else {
        current = current.right
      }
    } 

    return null 
  }

  findMin() {
    // returns lowest value 
    let current = this.root 
    while(current !== null) {
      if(current.left === null) {
        return current.value
      }
      current = current.left
    }
  }

  findMax() {
    // returns highest value 
    let current = this.root 
    while(current !== null) {
      if(current.right === null) {
        return current.value
      }
      current = current.right
    }
  }

  removeNode () {
    // find minumum in right sub tree 
    // copy minimum in node that needs to be deleted 
    // delete min and have the new right min the decsendant 

    // node with no lefts in the right subtree is clearly the min since everything to the right will be greater than it 
    
  }
}


let tree = new BinarySeachTree()

tree.insert(25)
tree.insert(5)
tree.insert(4)
tree.insert(44)
tree.insert(3)



console.log(tree.findMax())