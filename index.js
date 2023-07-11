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

  findNode(data, current = this.root) {

    if (current.data === data) {
      return current;
    }
    for (const child of current.children) {
      if(this.findNode(data, child)) {
        return this.findNode(data, child);
      }
    }
    return null
  }
}

const a = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");
const g = new TreeNode("G");
const h = new TreeNode("H");
a.children.push(b, c, d);
b.children.push(e, f, g);
d.children.push(h);
treeA = new Tree(a);

console.log(treeA.findNode("H"));
module.exports = { TreeNode, Tree };