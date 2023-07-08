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

module.exports = { TreeNode, Tree };
