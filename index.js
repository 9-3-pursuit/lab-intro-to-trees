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

  findNode(data, currNode = this.root) {
    if(currNode.data === data) {
      return currNode;
    }
    for (let child of currNode.children) {
      let thatChild = this.findNode(data, child);
      if(thatChild !== null) {
        return thatChild;
      }
    }
    return null;
  }
}



module.exports = { TreeNode, Tree };
