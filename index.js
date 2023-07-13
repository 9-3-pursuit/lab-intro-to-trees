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

  findNode(data) {
    // Start the search from the root node
    return this.searchNode(this.root, data);
  }

  searchNode(node, targetNode) {
    // Check if the current node contains the target data
    if (node.data === targetNode) {
      return node;
    }

    // Recursively search in the children nodes
    for (const child of node.children) {
      const result = this.searchNode(child, targetNode);
      if (result) {
        return result;
      }
    }

    // The target data was not found in the tree
    return null;
  }
}

module.exports = { TreeNode, Tree };









