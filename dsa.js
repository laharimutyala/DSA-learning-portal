// ================= NAVIGATION =================

function showPage(id) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// ================= ARRAY =================
// ================= ARRAY =================

let arr = [];

// Insert at End
function insertArray() {

    let input = document.getElementById("arrayInput");
    let val = input.value.trim();

    if (val === "") {
        alert("Please enter a value");
        return;
    }

    arr.push(val);

    renderArray();

    input.value = "";
}


// Delete Last
function deleteArray() {

    if (arr.length === 0) {
        alert("Array is Empty");
        return;
    }

    arr.pop();

    renderArray();
}


// Insert At Index
function insertAtIndex() {

    let value =
        document.getElementById("arrayInput").value.trim();

    let index =
        parseInt(document.getElementById("arrayIndex").value);

    if (value === "") {
        alert("Please enter a value");
        return;
    }

    if (isNaN(index) || index < 0 || index > arr.length) {
        alert("Invalid Index");
        return;
    }

    arr.splice(index, 0, value);

    renderArray();

    document.getElementById("arrayInput").value = "";
    document.getElementById("arrayIndex").value = "";
}


// Delete At Index
function deleteAtIndex() {

    let index =
        parseInt(document.getElementById("arrayIndex").value);

    if (arr.length === 0) {
        alert("Array is Empty");
        return;
    }

    if (isNaN(index) || index < 0 || index >= arr.length) {
        alert("Invalid Index");
        return;
    }

    arr.splice(index, 1);

    renderArray();

    document.getElementById("arrayIndex").value = "";
}


// Search
function searchArray() {

    let value =
        document.getElementById("searchInput").value.trim();

    let result =
        document.getElementById("searchResult");

    let index = arr.indexOf(value);

    if (index === -1) {

        result.innerHTML =
            `<h3 style="color:red;">
                Element Not Found
             </h3>`;

    } else {

        result.innerHTML =
            `<h3 style="color:green;">
                Element Found at Index ${index}
             </h3>`;
    }

    document.getElementById("searchInput").value = "";
}


// Render Array
function renderArray() {

    let html = "";

    arr.forEach((value, index) => {

        html += `
        <div class="box">

            ${value}

            <small>Index ${index}</small>

        </div>
        `;
    });

    document.getElementById("arrayDisplay").innerHTML = html;
}

// ================= STACK =================
// ================= STACK =================

let stack = [];

// PUSH

function pushStack() {

    let input = document.getElementById("stackInput");
    let val = input.value.trim();

    if (val === "") {
        alert("Please enter a value");
        return;
    }

    stack.push(val);

    renderStack();

    input.value = "";
}


// POP

function popStack() {

    if (stack.length === 0) {
        alert("Stack Underflow");
        return;
    }

    stack.pop();

    renderStack();
}


// PEEK

function peekStack() {

    let result = document.getElementById("stackResult");

    if (stack.length === 0) {

        result.innerHTML =
            `<h3 style="color:red;">
                Stack is Empty
             </h3>`;

        return;
    }

    result.innerHTML =
        `<h3 style="color:green;">
            Top Element = ${stack[stack.length - 1]}
         </h3>`;
}


// RENDER STACK

function renderStack() {

    let html = "";

    for (let i = stack.length - 1; i >= 0; i--) {

        html += `
        <div class="box stack-box">

            ${stack[i]}

            ${i === stack.length - 1 ?
            `<span class="top-label">TOP</span>` : ""}

        </div>
        `;
    }

    document.getElementById("stackDisplay").innerHTML = html;
}

// ================= QUEUE =================
// ================= QUEUE =================

let queue = [];


// ENQUEUE

function enqueue() {

    let input =
        document.getElementById("queueInput");

    let val = input.value.trim();

    if (val === "") {

        alert("Please enter a value");

        return;
    }

    queue.push(val);

    renderQueue();

    input.value = "";
}


// DEQUEUE

function dequeue() {

    if (queue.length === 0) {

        alert("Queue Underflow");

        return;
    }

    queue.shift();

    renderQueue();
}


// PEEK FRONT

function peekQueue() {

    let result =
        document.getElementById("queueResult");

    if (queue.length === 0) {

        result.innerHTML =
            `<h3 style="color:red;">
                Queue is Empty
            </h3>`;

        return;
    }

    result.innerHTML =
        `<h3 style="color:green;">
            Front Element = ${queue[0]}
        </h3>`;
}


// RENDER QUEUE

function renderQueue() {

    let html = "";

    queue.forEach((value, index) => {

        html += `
        <div class="box queue-box">

            ${value}

            ${index === 0 ?
            `<span class="front-label">
                FRONT
            </span>` : ""}

            ${index === queue.length - 1 ?
            `<span class="rear-label">
                REAR
            </span>` : ""}

        </div>
        `;
    });

    document.getElementById("queueDisplay")
            .innerHTML = html;
}

// ================= LINKED LIST =================

// ================= LINKED LIST =================

let list = [];


// INSERT AT BEGINNING

function insertAtBeginning() {

    let input =
        document.getElementById("listInput");

    let val = input.value.trim();

    if (val === "") {

        alert("Please enter a value");

        return;
    }

    list.unshift(val);

    renderLinkedList();

    input.value = "";
}


// INSERT AT END

function insertAtEnd() {

    let input =
        document.getElementById("listInput");

    let val = input.value.trim();

    if (val === "") {

        alert("Please enter a value");

        return;
    }

    list.push(val);

    renderLinkedList();

    input.value = "";
}


// DELETE BY VALUE

function deleteByValue() {

    let input =
        document.getElementById("listInput");

    let val = input.value.trim();

    let result =
        document.getElementById("listResult");

    let index = list.indexOf(val);

    if (index === -1) {

        result.innerHTML =
            `<h3 style="color:red;">
                Value Not Found
            </h3>`;

        return;
    }

    list.splice(index, 1);

    result.innerHTML =
        `<h3 style="color:green;">
            ${val} Deleted Successfully
        </h3>`;

    renderLinkedList();

    input.value = "";
}


// RENDER LINKED LIST

function renderLinkedList() {

    let html = "";

    if (list.length === 0) {

        html =
        `<h3 style="color:#64748b;">
            Linked List Empty
        </h3>`;
    }

    list.forEach(value => {

        html += `
            <div class="node">
                ${value}
            </div>

            <span class="arrow">
                ➜
            </span>
        `;
    });

    html += `
        <div class="null-node">
            NULL
        </div>
    `;

    document.getElementById("listDisplay")
            .innerHTML = html;
}
// ================= TREE =================
// ================= BINARY SEARCH TREE =================

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = null;


// INSERT

function insertTree() {

    let input =
        document.getElementById("treeInput");

    let value = parseInt(input.value);

    if (isNaN(value)) {
        alert("Enter a valid number");
        return;
    }

    root = insertNode(root, value);

    renderTree();

    input.value = "";
}


function insertNode(node, value) {

    if (node === null) {
        return new TreeNode(value);
    }

    if (value < node.value) {

        node.left =
            insertNode(node.left, value);

    } else if (value > node.value) {

        node.right =
            insertNode(node.right, value);
    }

    return node;
}


// RENDER TREE
// ================= RENDER TREE =================

function renderTree() {

    const display = document.getElementById("treeDisplay");
    display.innerHTML = "";

    if (!root) return;

    let positions = [];

    // Root position
    calculatePositions(root, 500, 60, 180, positions);

    let html = `
    <svg width="1000" height="600" style="overflow:visible">
    `;

    // Draw Lines
    positions.forEach(node => {

        if (node.parentX !== null) {

            html += `
            <line
                x1="${node.parentX}"
                y1="${node.parentY + 30}"
                x2="${node.x}"
                y2="${node.y - 30}"
                stroke="#555"
                stroke-width="2"
            />
            `;
        }
    });

    // Draw Nodes
    positions.forEach(node => {

        html += `

        <circle
            cx="${node.x}"
            cy="${node.y}"
            r="30"
            fill="#a5d6ff"
            stroke="#2196f3"
            stroke-width="3"
        />

        <text
            x="${node.x}"
            y="${node.y + 8}"
            text-anchor="middle"
            font-size="20"
            font-weight="bold"
            fill="white">

            ${node.value}

        </text>
        `;
    });

    html += `</svg>`;

    display.innerHTML = html;
}
// ================= TRAVERSALS =================

function inorderTraversal() {

    let result = [];

    inorder(root, result);

    document.getElementById("treeResult")
            .innerHTML =
            `<h3>
                Inorder :
                ${result.join(" → ")}
            </h3>`;
}

function inorder(node, result) {

    if (node === null) return;

    inorder(node.left, result);

    result.push(node.value);

    inorder(node.right, result);
}



function preorderTraversal() {

    let result = [];

    preorder(root, result);

    document.getElementById("treeResult")
            .innerHTML =
            `<h3>
                Preorder :
                ${result.join(" → ")}
            </h3>`;
}

function preorder(node, result) {

    if (node === null) return;

    result.push(node.value);

    preorder(node.left, result);

    preorder(node.right, result);
}



function postorderTraversal() {

    let result = [];

    postorder(root, result);

    document.getElementById("treeResult")
            .innerHTML =
            `<h3>
                Postorder :
                ${result.join(" → ")}
            </h3>`;
}

function postorder(node, result) {

    if (node === null) return;

    postorder(node.left, result);

    postorder(node.right, result);

    result.push(node.value);
}

// ================= GRAPH =================
// ================= GRAPH =================

let graph = {};


// ADD VERTEX

function addVertex() {

    let input =
        document.getElementById("vertexInput");

    let vertex = input.value.trim();

    if (vertex === "") {

        alert("Enter Vertex");

        return;
    }

    if (!graph[vertex]) {

        graph[vertex] = [];
    }

    renderGraph();

    input.value = "";
}


// ADD EDGE

function addEdge() {

    let source =
        document.getElementById("sourceVertex")
        .value.trim();

    let destination =
        document.getElementById("destinationVertex")
        .value.trim();

    if (!graph[source] || !graph[destination]) {

        alert("Create both vertices first");

        return;
    }

    graph[source].push(destination);
    graph[destination].push(source);

    renderGraph();

    document.getElementById("sourceVertex")
            .value = "";

    document.getElementById("destinationVertex")
            .value = "";
}


// BFS

function bfsTraversal() {

    let start = Object.keys(graph)[0];

    if (!start) {

        alert("Graph is Empty");

        return;
    }

    let queue = [start];

    let visited = new Set();

    let result = [];

    while (queue.length > 0) {

        let current = queue.shift();

        if (!visited.has(current)) {

            visited.add(current);

            result.push(current);

            graph[current].forEach(neighbour => {

                if (!visited.has(neighbour)) {

                    queue.push(neighbour);
                }
            });
        }
    }

    document.getElementById("graphResult")
            .innerHTML =
            `<h3>
                BFS :
                ${result.join(" → ")}
            </h3>`;
}



// DFS

function dfsTraversal() {

    let start = Object.keys(graph)[0];

    if (!start) {

        alert("Graph is Empty");

        return;
    }

    let visited = new Set();

    let result = [];

    dfs(start, visited, result);

    document.getElementById("graphResult")
            .innerHTML =
            `<h3>
                DFS :
                ${result.join(" → ")}
            </h3>`;
}


function dfs(vertex, visited, result) {

    visited.add(vertex);

    result.push(vertex);

    graph[vertex].forEach(neighbour => {

        if (!visited.has(neighbour)) {

            dfs(neighbour,
                visited,
                result);
        }
    });
}



// RENDER GRAPH
function renderGraph() {

    const display = document.getElementById("graphDisplay");
    display.innerHTML = "";

    let vertices = Object.keys(graph);

    if (vertices.length === 0) return;

    // Fixed positions for nodes
    let positions = [
        {x: 100, y: 180},
        {x: 350, y: 100},
        {x: 550, y: 250},
        {x: 750, y: 100},
        {x: 900, y: 250},
        {x: 200, y: 400},
        {x: 500, y: 450},
        {x: 800, y: 400}
    ];

    let html = `
        <svg width="1000" height="550"
             style="position:absolute;top:0;left:0;">
    `;

    // Draw edges
    vertices.forEach((v, i) => {

        graph[v].forEach(neighbour => {

            let j = vertices.indexOf(neighbour);

            if (i < j) {

                html += `
                    <line
                        x1="${positions[i].x}"
                        y1="${positions[i].y}"
                        x2="${positions[j].x}"
                        y2="${positions[j].y}"
                        stroke="black"
                        stroke-width="3"
                    />
                `;
            }
        });
    });

    html += `</svg>`;

    // Draw nodes
    vertices.forEach((v, i) => {

        html += `
        <div class="graph-node"
            style="
                left:${positions[i].x - 40}px;
                top:${positions[i].y - 40}px;
            ">
            ${v}
        </div>
        `;
    });

    display.innerHTML = html;
}
// ================= COMMON RENDER FUNCTION =================

function render(data, id) {

    let html = "";

    data.forEach(v => {
        html += `<span class="box">${v}</span>`;
    });

    document.getElementById(id).innerHTML = html;
}

function clearArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerHTML = "";
    document.getElementById("searchResult").innerHTML = "";
}

// ================= CLEAR ALL FUNCTIONS =================

// Array
function clearArray() {
    arr = [];
    document.getElementById("arrayDisplay").innerHTML = "";
    let result = document.getElementById("searchResult");
    if (result) result.innerHTML = "";
}

// Stack
function clearStack() {
    stack = [];
    document.getElementById("stackDisplay").innerHTML = "";

    let result = document.getElementById("stackResult");
    if (result) result.innerHTML = "";
}

// Queue
function clearQueue() {
    queue = [];
    document.getElementById("queueDisplay").innerHTML = "";

    let result = document.getElementById("queueResult");
    if (result) result.innerHTML = "";
}

// Linked List
function clearList() {
    list = [];
    document.getElementById("listDisplay").innerHTML = "";

    let result = document.getElementById("listResult");
    if (result) result.innerHTML = "";
}

// Tree
function clearTree() {
    root = null;
    document.getElementById("treeDisplay").innerHTML = "";

    let result = document.getElementById("treeResult");
    if (result) result.innerHTML = "";
}

// Graph
function clearGraph() {
    graph = {};
    document.getElementById("graphDisplay").innerHTML = "";

    let result = document.getElementById("graphResult");
    if (result) result.innerHTML = "";
}

function calculatePositions(
    node,
    x,
    y,
    gap,
    positions,
    parentX = null,
    parentY = null
) {

    if (!node) return;

    positions.push({
        value: node.value,
        x,
        y,
        parentX,
        parentY
    });

    // Prevent gap becoming too small
    let newGap = Math.max(gap / 2, 60);

    calculatePositions(
        node.left,
        x - gap,
        y + 100,
        newGap,
        positions,
        x,
        y
    );

    calculatePositions(
        node.right,
        x + gap,
        y + 100,
        newGap,
        positions,
        x,
        y
    );
}