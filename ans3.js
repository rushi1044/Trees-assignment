class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let d = null;

const insert = (d, value) => {
  if (d == null) {
    let node = new Node(value);
    d = node;
    return d;
  }
  if (value <= d.value) {
    d.left = insert(d.left, value);
  } else if (value > d.value) {
    d.right = insert(d.right, value);
  }
  return d;
};

const search = (d, value) => {
  if (d == null) {
    return false;
  }
  if (d.value == value) {
    return true;
  } else if (value < d.value) {
    return search(d.left, value);
  }
  return search(d.right, value);
};

const findMaxVal = (d) => {
  if (d == null) {
    return null;
  }
  if (d.right == null) {
    return d.value;
  }
  return findMaxVal(d.right);
};

const remove = (d, value) => {
  if (d == null) {
    return null;
  }
  if (value < d.value) {
    d.left = remove(d.left, value);
  } else if (value > d.value) {
    d.right = remove(d.right, value);
  } else {
    if (d.left == null && d.right == null) {
      return null;
    }
    if (d.left && d.right) {
      let temp = findMaxVal(d.left);
      d.value = temp;
      d.left = remove(d.left, temp);
    } else {
      if (d.left !== null) {
        return d.left;
      }
      if (d.right !== null) {
        return d.right;
      }
    }
  }
  return d;
};

const preOrder = (d) => {
  if (d == null) {
    return;
  }
  console.log(d.value);
  preOrder(d.left);
  preOrder(d.right);
};

const inOrder = (d) => {
  if (d == null) {
    return;
  }
  inOrder(d.left);
  console.log(d.value);
  inOrder(d.right);
};

const postOrder = (d) => {
  if (d == null) {
    return;
  }
  postOrder(d.left);
  postOrder(d.right);
  console.log(d.value);
};

d = insert(d, 5);
d = insert(d, 8);
d = insert(d, 9);
d = insert(d, 1);
d = insert(d, 5);
d = insert(d, 15);
d = insert(d, 4);
d = insert(d, 5);
d = insert(d, 3);

console.log("------Pre Order Traversal------");
preOrder(d);
console.log("------In Order Traversal------");
inOrder(d);
console.log("------Post Order Traversal------");
postOrder(d);
