class Graph {
    /**
     * 
     * @param {boolean} isDirect 
     */
    constructor (isDirect) {
        /** 是否是有向图 */
        this.isDirect = isDirect;
        /** 存储图中所有顶点 */
        this.vertices = [];
        /** 邻接表 */
        this.adjList = new Map();
    }

    /** 向图中添加一个顶点 */
    addVertex (v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    };

    /** 
     * @description 添加顶点之间的边 v -> w
     * @param {string} v 顶点
     * @param {string} w 顶点
     * */
    addEdge (v, w) {
        this.adjList.get(v).push(w)
        if (!this.isDirect) {
            // 无向图
            this.adjList.get(w).push(v);
        }
    }

    /**
     * 获取顶点v的所有相邻边
     * @param {*} v 顶点
     * @returns {Array} 返回顶点v的所有相邻边的数组
     */
    neighbors (v) {
        return this.adjList.get(v)
    }
    toJSON () {
        let s = "";
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + " -> ";
            let neighbors = this.neighbors(this.vertices[i]);
            for (let i = 0; i < neighbors.length; i++) {
                s += neighbors[i] + " ";
            }
            s += "\n";
        }
        return s;
    }
}

module.exports = Graph;

// // test
// let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// let myGrap = new Graph(false);

// for (let i = 0; i < myVertices.length; i++) {
//     myGrap.addVertex(myVertices[i]);
// }

// myGrap.addEdge("A", "B");
// myGrap.addEdge("A", "C");
// myGrap.addEdge("A", "D");
// myGrap.addEdge("C", "D");
// myGrap.addEdge("C", "G");
// myGrap.addEdge("D", "G");
// myGrap.addEdge("D", "H");
// myGrap.addEdge("B", "E");
// myGrap.addEdge("B", "F");
// myGrap.addEdge("E", "I");

// console.log(myGrap.toJSON())
