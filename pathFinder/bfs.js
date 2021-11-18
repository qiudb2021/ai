
const Graph = require ("../lib/graph")
const Queue = require ("../lib/queue")
/**
 *
 * @param {number[][]} grid
 */
class BFS {
    constructor(graph) {
        this.graph = graph;
    }
    /**
     *
     * @param {string} start
     */
    visit(start) {
        let fronter = new Queue();
        fronter.enqueue(start);
        let reached = new Set();
        reached.add(start);

        while (!fronter.isEmpty()) {
            let current = fronter.dequeue();
            console.log("Visiting ", current)
            let neighbores = this.graph.neighbors(current);
            for (let i = 0; i < neighbores.length; i++){
                let next = neighbores[i];
                if (reached.has(next)) {
                    continue;
                }
                fronter.enqueue(next);
                reached.add(next)
            }
        }
    }
}

let graph = new Graph(true);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);    
}

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'B');
graph.addEdge('C', 'D');
graph.addEdge('C', 'F');
graph.addEdge('D', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

console.log(graph.toJSON())

let bfs = new BFS(graph);
console.log("Reachable from A")
bfs.visit('A');

console.log("Reachable from E")
bfs.visit('E');
