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
      /*
        ┌─A─┐
      ┌─B   C─┐
      D       E─┐ 
                F─┐
                  G─┐
                    H─┐
                      I     
    */
   
  findNode(data, currentNode = this.root) {
    if (currentNode.data === data) {
      return currentNode;
    }
    for (let child of currentNode.children) {
      let foundChild = this.findNode(data, child);
      if (foundChild !== null) {
        return foundChild;
      }
    }
    return null;
  }
}



// findNode(A)
// findNode(B)
// findNode(D)
// findNode(E)
// findNode(G)
// findNode(H)


// findNode(B)

// findNode(D)

module.exports = { TreeNode, Tree };
