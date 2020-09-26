
import Graph from 'node-dijkstra';
// const Graph = require('node-dijkstra')

const route = new Graph()

route.addNode('A', { 'B': 1, 'C': 1, 'D': 1 })
route.addNode('B', { 'A': 1, 'E': 1 })
route.addNode('C', { 'A': 1, 'E': 1, 'F': 1 })
route.addNode('D', { 'A': 1, 'F': 1, 'G': 1 })
route.addNode('E', { 'B': 1, 'H': 1, 'C': 1 })
route.addNode('F', { 'C': 1, 'D': 1 })
route.addNode('G', { 'D': 1, 'H': 1 })
route.addNode('H', { 'E': 1, 'G': 1, 'I': 1, 'J': 1 })
route.addNode('I', { 'H': 1, 'K': 1 })
route.addNode('J', { 'H': 1, 'K': 1 })
route.addNode('K', { 'I': 1, 'J': 1 })
route.addNode('L', {})

const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

export interface IHopsTot {
  [key: string]: number;
}
class Dijkstra {

  public findnode(targets: string[]) {

    console.log(targets)
    let hopstot: IHopsTot = {};
    for (let node of nodes) {
      if (targets.includes(node))
        continue;
      else {
        let hops = 0;
        for (let target of targets) {
          var source = node;
          var dest = target;
          hops += ((route.path(source, dest)).length - 1)
        }
        // dict = {}
        // dict[node] = hops;
        hopstot[node] = hops
      }
    }
    let min = 9999;
    let finnode = '';
    for (let node in hopstot) {
      if (hopstot[node] < min) {
        min = hopstot[node];
        finnode = node;
      }
    }
    console.log(route.path("A", "L"));

    // return [hopstot, min, finnode];
    return {"desired_node": finnode, "target": targets}
  }
}

export let dijkstra = new Dijkstra();