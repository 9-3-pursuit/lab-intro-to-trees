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
    // Check if the root node matches the specified data
    if (this.root.data === data) {
      return this.root;
    }

    // Helper function to recursively search for the node
    const searchNode = (node, data) => {
      // Base case: if the node is null or matches the data, return the node
      if (node === null || node.data === data) {
        return node;
      }

      // Recursively search through each child node
      for (const child of node.children) {
        const foundNode = searchNode(child, data);
        if (foundNode !== null) {
          return foundNode;
        }
      }

      // Node not found
      return null;
    };

    // Start the search from the root node
    return searchNode(this.root, data);
  }
}

module.exports = { TreeNode, Tree };

