class Node {
  constructor() {
    this.value = 0;
    this.left = null;
    this.right = null;
  }
}
let d = null;
function searchLeaves(d) {
  if (d == null) return;

  if (d.left == null && d.right == null) {
    console.log(d.value + " ");
    return;
  }

  if (d.left != null) searchLeaves(d.left);

  if (d.right != null) searchLeaves(d.right);
}

function newNode(value) {
  var temp = new Node();
  temp.value = value;
  temp.left = null;
  temp.right = null;
  return temp;
}

d = newNode(9);
d.left = newNode(4);
d.left.left = newNode(21);
d.left.right = newNode(6);
d.left.right.left = newNode(14);
d.left.right.right = newNode(3);
d.right = newNode(10);
d.right.right = newNode(14);
d.right.right.left = newNode(8);

console.log("Leaves are");
searchLeaves(d);
