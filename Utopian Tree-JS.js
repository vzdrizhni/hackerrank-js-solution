function utopianTree(n) {

let treeHeight = 1;

for (let i = 1; i <= n; i++) {
    if (i%2 == 1) {
        treeHeight = treeHeight*2;
    } else if (i%2 == 0) {
        treeHeight = treeHeight + 1;
    };
}
    return treeHeight;
}