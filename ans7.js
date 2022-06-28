function sumOfNodes(a) {
  let leftCount = Math.pow(2, a - 1);

  let d = [];

  for (let k = 1; k <= a; k++) {
    d.push([]);
  }

  for (let k = 1; k <= leftCount; k++) {
    d[a - 1].push(k);
  }

  for (let k = a - 2; k >= 0; k--) {
    let w = 0;

    while (w < d[k + 1].length - 1) {
      d[k].push(d[k + 1][w] + d[k + 1][w + 1]);
      w += 2;
    }
  }

  let sum = 0;

  for (let k = 0; k < a; k++) {
    for (let s = 0; s < d[k].length; s++) {
      sum += d[k][s];
    }
  }

  return sum;
}

let a = 3;

console.log(`Sum of all nodes : ${sumOfNodes(a)}`);
