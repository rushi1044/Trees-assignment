class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxSum(a) {
  if (a == null) return 0;

  let result = a.value;

  let l = [];
  l.push(a);
  while (l.length != 0) {
    let count = l.length;

    let sum = 0;
    while (count-- > 0) {
      let temp = l.shift();

      sum = sum + temp.value;

      if (temp.left != null) l.push(temp.left);
      if (temp.right != null) l.push(temp.right);
    }

    result = Math.max(sum, result);
  }
  return result;
}

let a = new Node(11);
a.left = new Node(12);
a.right = new Node(13);
a.left.left = new Node(14);
a.left.right = new Node(15);
a.right.right = new Node(16);
a.right.right.left = new Node(17);
a.right.right.right = new Node(18);

console.log("Maximum level sum is " + maxSum(a));
