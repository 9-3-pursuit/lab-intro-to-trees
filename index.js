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
    if (this.root == null){
      return null;
    }
    if (this.root.data === data) {
      return this.root;
    }

    for (let i = 0; i < this.root.children.length; i++){
      const child = this.root.children[i];
      const subTree = new Tree(child)
      const foundNode = subTree.findNode(data);
      if (foundNode !== null){
        return foundNode;
      }
    }
    return null;
  }
}

const treeA = new Tree()
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

treeA.root = this.a;

console.log(treeA.findNode("A"));

module.exports = { TreeNode, Tree };
