class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let d;

function getNode(value) {
  let newNode = new Node(value);
  return newNode;
}

function countSumX(p, k) {
  if (p === null) return 0;
  let q = countSumX(p.left, k);
  let g = countSumX(p.right, k);
  let sum = q + g + p.value;

  if (sum === k) d++;

  return sum;
}

function countSum(p, k) {
  if (p === null) return 0;
  d = 0;
  let q = countSumX(p.left, k);
  let g = countSumX(p.right, k);
  if (q + g + p.value === k) d++;
  return d;
}

let p = getNode(11);
p.left = getNode(12);
p.right = getNode(13);
p.left.left = getNode(15);
p.left.right = getNode(18);
p.right.left = getNode(14);
p.right.right = getNode(19);

let k = 5;

console.log(`Count : ${countSum(p, k)}`);
