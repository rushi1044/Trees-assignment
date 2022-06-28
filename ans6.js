class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function LeftLeavesSum(d) {
  if (d == null) return 0;
  var stack = [];
  stack.push(d);
  var sum = 0;
  while (stack.length > 0) {
    var currentNode = stack[stack.length - 1];
    stack.pop();
    if (currentNode.left != null) {
      stack.push(currentNode.left);
      if (currentNode.left.left == null && currentNode.left.right == null) {
        sum = sum + currentNode.left.key;
      }
    }
    if (currentNode.right != null) stack.push(currentNode.right);
  }
  return sum;
}

var d = new Node(11);
d.left = new Node(12);
d.right = new Node(13);
d.right.left = new Node(14);
d.right.right = new Node(15);
d.right.right.left = new Node(16);
d.left.left = new Node(17);
d.left.right = new Node(18);
d.left.right.right = new Node(19);
console.log(`Sum of left leaves is ${LeftLeavesSum(d)}`);
