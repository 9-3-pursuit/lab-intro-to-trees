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

  findNode(data, node = this.root) {
   

    if (node.data === data) {
      return node
    }

    for(let child of node.children) {
      let foundNode = this.findNode(data, child)
      if (foundNode != null) {
        return foundNode
      }
    }
    return null
    }
  }

  







module.exports = { TreeNode, Tree };
