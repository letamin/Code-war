/* 

https://www.codewars.com/kata/5765870e190b1472ec0022a2/javascript

testMaze(true,
`.W.
.W.
...`)

testMaze(false,
`.W.
.W.
W..`)

testMaze(true,
`......
......
......
......
......
......`)

testMaze(false,
`......
......
......
......
.....W
....W.`)

*/

function pathFinder(maze) {
    const { finishNode } = dijkstra(maze);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);

    if (nodesInShortestPathOrder.length == 1) return false;

    return true;
}

function dijkstra(maze) {
    let grid = createGrid(maze);
    let unvisitedNodes = getAllNodes(grid);
    getAllNeighbors(grid);

    let startNode = grid[0][0];
    startNode.distance = 0;
    startNode.isStart = true;
    startNode.isFinish = false;

    let length = grid.length;
    let finishNode = grid[length - 1][length - 1];

    const visitedNodesInOrder = [];

    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        closestNode.isVisited = true;
        if (closestNode.isWall) continue;
        if (closestNode === finishNode && closestNode.previousNode == null) {
            closestNode.isVisited = false;
            return { visitedNodesInOrder, finishNode };
        }
        if (closestNode.distance == Infinity) return { visitedNodesInOrder, finishNode };
        visitedNodesInOrder.push(closestNode);
        if (closestNode === finishNode) return { visitedNodesInOrder, finishNode };
        updateDistanceUnvisitedNeighbors(closestNode);
    }
}

//Update the distance of the unvisited nodes (closet node's distance + 1) and set its previous node = closet node
function updateDistanceUnvisitedNeighbors(node) {
    const unvisitedNeighbors = node.neighbors.filter(neighbor => !neighbor.isVisited);
    for (const neighbor of unvisitedNeighbors) {
        if (neighbor.isWeighted) {
            if (neighbor.distance != Infinity) {
                if (node.distance + 10 < neighbor.distance) {
                    neighbor.distance = neighbor.distance - 10 + node.distance;
                    neighbor.previousNode = node;
                }
            } else if (neighbor.distance == Infinity) {
                neighbor.distance = node.distance + 10;
                neighbor.previousNode = node;
            }
        } else {
            neighbor.distance = node.distance + 1;
            neighbor.previousNode = node;
        }
    }
}

//Create a 2D array based on the original maze that acts as a grid
function createGrid(maze) {
    let row = [];
    let grid = [];

    for (let i = 0; i < maze.length; i++) {
        let node = {};

        if (maze[i] != "\n") {
            node.distance = Infinity;
            node.isFinish = false;
            node.isStart = false;
            node.previousNode = null;
            if (maze[i] == `.`) {
                node.isWall = false;
            } else node.isWall = true;

            row.push(node);
        } else {
            grid.push(row);
            row = [];
        }
    }

    //Push the last row in
    grid.push(row);

    //Create a row index and col index for each node
    grid.forEach((row, idxRow) => {
        row.forEach((cell, idxCol) => {
            cell.row = idxRow;
            cell.col = idxCol;
            cell.neighbors = [];
        })
    })

    return grid;
}

//Put all the nodes into one single array
function getAllNodes(grid) {
    const arrayAll = [];
    for (const row of grid) {
        for (const node of row) {
            arrayAll.push(node);
        }
    }
    return arrayAll;
}

//Get all the neighbors of the nodes
function getAllNeighbors(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            addNeighbors(grid[i][j], grid);
        }
    }
}

//Get ALL the neighbor nodes (up, down, left, and right nodes)
function addNeighbors(node, grid) {
    const { col, row } = node;
    if (row > 0) node.neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) node.neighbors.push(grid[row + 1][col]);
    if (col > 0) node.neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) node.neighbors.push(grid[row][col + 1]);
}

function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort(customsort);
}

//Sort the nodes base on distance, if distances are the same then the finish nodes have higher priority
function customsort(nodeA, nodeB) {
    if (nodeA.distance != nodeB.distance) return nodeA.distance - nodeB.distance;
    else if (nodeA.distance == nodeB.distance) return nodeB.isFinish - nodeA.isFinish;
}

function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}