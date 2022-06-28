class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

var d = null;

function treeBFS() {
  var h = height(d);
  var i;
  for (i = 1; i <= h; i++) currentLevel(d, i);
}

function treeDFS(d) {
  if (d == null) {
    return;
  }
  console.log(d.value);
  treeDFS(d.left);
  treeDFS(d.right);
}

function height(d) {
  if (d == null) return 0;
  else {
    var leftHeight = height(d.left);
    var rightHeight = height(d.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

function currentLevel(d, level) {
  if (d == null) return;
  if (level == 1) console.log(d.value + " ");
  else if (level > 1) {
    currentLevel(d.left, level - 1);
    currentLevel(d.right, level - 1);
  }
}

d = new Node(11);
d.left = new Node(12);
d.right = new Node(13);
d.left.left = new Node(14);
d.left.right = new Node(15);

console.log("BFS:");
treeBFS();
console.log("DFS:");
treeDFS(d);
