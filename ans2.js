class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

let d;

function treeHeight(node) {
  if (node == null) {
    return 0;
  } else {
    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

d = new Node(2);
d.left = new Node(8);
d.right = new Node(3);
d.right.left = new Node(4);
d.right.right = new Node(5);
d.right.left.left = new Node(1);
d.right.left.right = new Node(9);
d.right.right.left = new Node(7);
d.right.right.right = new Node(9);
console.log("Height/Depth of the tree is : " + treeHeight(d));
