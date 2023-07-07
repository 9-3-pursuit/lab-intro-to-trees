class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data, landedNode = this.root) {
    // conditon to check if current node is empty, IF empty return null
    if (landedNode === null) {
      return null;
    }
    // IF the current node HAS a value return that value
    else if (landedNode.data === data) {
      return landedNode;
    } else {
      let landedChildArray = landedNode.children; // setting child array to current node.child
      
      // for of loop - iterate through children node
      for (const child of landedChildArray) { 
        // setting found node data to findNode method w/ node data & the child
        let foundData = this.findNode(data, child);
        // condition if found node data NOT empty, return the found node info
        if (foundData !== null) {
          return foundData;
        }
      }
      // IF the found node is empty, return null
      return null;
    }
  }
}
// Example of how it would be callled, according to readMe.md--v
// tree.findNode("A"); //> { TreeNode data: "A", ... }
// tree.findNode("G"); //> { TreeNode data: "G", ... }
// tree.findNode("Y"); //> null

module.exports = { TreeNode, Tree };
