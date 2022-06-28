class Node {
  constructor(val) {
    this.left = null;
    this.value = val;
    this.right = null;
  }
}

let a = null;

const insert = (a, value) => {
  if (a == null) {
    let node = new Node(value);
    a = node;
    return a;
  }
  if (value <= a.value) {
    a.left = insert(a.left, value);
  } else if (value > a.value) {
    a.right = insert(a.right, value);
  }
  return a;
};

const search = (a, value) => {
  if (a == null) {
    return false;
  }
  if (a.value == value) {
    return true;
  } else if (value < a.value) {
    return search(a.left, value);
  }
  return search(a.right, value);
};

const findMaxVal = (a) => {
  if (a == null) {
    return null;
  }
  if (a.right == null) {
    return a.value;
  }
  return findMaxVal(a.right);
};

const remove = (a, value) => {
  if (a == null) {
    return null;
  }
  if (value < a.value) {
    a.left = remove(a.left, value);
  } else if (value > a.value) {
    a.right = remove(a.right, value);
  } else {
    if (a.left == null && a.right == null) {
      return null;
    }
    if (a.left && a.right) {
      let temp = findMaxVal(a.left);
      a.value = temp;
      a.left = remove(a.left, temp);
    } else {
      if (a.left !== null) {
        return a.left;
      }
      if (a.right !== null) {
        return a.right;
      }
    }
  }
  return a;
};

const preOrder = (a) => {
  if (a == null) {
    return;
  }
  console.log(a.value);
  preOrder(a.left);
  preOrder(a.right);
};

const inOrder = (a) => {
  if (a == null) {
    return;
  }
  inOrder(a.left);
  console.log(a.value);
  inOrder(a.right);
};

const postOrder = (a) => {
  if (a == null) {
    return;
  }
  postOrder(a.left);
  postOrder(a.right);
  console.log(a.value);
};

a = insert(a, 1);
a = insert(a, 5);
a = insert(a, 1);
a = insert(a, 7);
a = insert(a, 8);
a = insert(a, 4);
a = insert(a, 8);
a = insert(a, 6);
a = insert(a, 3);

preOrder(a);
console.log("------End of PreOrder------");
inOrder(a);
console.log("------End of InOrder------");
postOrder(a);
console.log("------End of PostOrder------");

console.log(search(a, 7));
console.log(search(a, 700));

a = remove(a, 6);
preOrder(a);
console.log("----------------");
a = remove(a, 8);
preOrder(a);
