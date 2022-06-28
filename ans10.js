class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function oddNodes(d, isOdd) {
  if (d == null) return;

  if (isOdd == true) console.log(d.value + " ");

  oddNodes(d.left, !isOdd);
  oddNodes(d.right, !isOdd);
}

function newNode(value) {
  let node = new Node(value);
  return node;
}

let d = newNode(11);
d.left = newNode(12);
d.right = newNode(13);
d.left.left = newNode(14);
d.left.right = newNode(15);
d.right.right = newNode(16);
oddNodes(d, true);
