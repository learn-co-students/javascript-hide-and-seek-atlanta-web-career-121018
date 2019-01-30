




function getFirstSelector(selector) {
    return document.querySelector(selector);
};

function nestedTarget() {
    // return document.getElementById('nested').querySelector('.target');
    return document.querySelector('.target');
};

function deepestChild() {
    const nodes = document.getElementById('grand-node').querySelectorAll('div');
    return nodes[nodes.length - 1];
};

// function increaseRankBy(n) {
//     const ranks = document.querySelectorAll('.ranked-list li');
//     ranks.forEach(function(node, i, arr) {
//         return node.textContent = parseInt(node.innerHTML) + n;
//     });
// };

function increaseRankBy(n) {
    const ranks = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < ranks.length; i++) {
        ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
    };
};
