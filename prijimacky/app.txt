
//nestihl jsem to dokončit nefunguje případ když je to nemožný 
//Zdroj: https://www.youtube.com/watch?v=-L-WgKMFuhE&t=605s&ab_channel=SebastianLague

class GridNode {
  x;
  y;
  //distance from starting node
  GCost;
  //(heuristic) distance from end node
  HCost;

  parent;

  TotalCost;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  computeTotalCost(START, END) {
    this.GCost = Math.sqrt((START.x - this.x) ** 2 + (START.y - this.y) ** 2);
    this.HCost = Math.sqrt((END.x - this.x) ** 2 + (END.y - this.y) ** 2);
    this.TotalCost = this.GCost + this.HCost;
  }
}
class StartNode extends GridNode {}
class EndNode extends GridNode {}
class Wall extends GridNode {}

const input = `
# . . . # . H . # . . . . .
# . . . # . . . # . . . . .
# . H . # . . . # . . . . .
# . . . . . K . # . . . . .
# . . . # . . . # . . . . .
# . . . # . . . # . . . . .`;

let gridLine = input.split("\n").filter(Boolean);
console.table(gridLine);
gridLine = gridLine.map((line) => {
  return line.replace(/\s/g, "");
}, []);

let START;
const ENDS = [];

const OPEN = [];
const CLOSED = [];

const MAP = [];

gridLine.forEach((line, y) => {
  const nodeLine = [];
  [...line].forEach((data, x) => {
    switch (data) {
      case ".":
        nodeLine.push(new GridNode(x, y));
        break;
      case "#":
        nodeLine.push(new Wall(x, y));
        break;
      case "K":
        START = new StartNode(x, y);
        nodeLine.push(START);
        break;
      case "H":
        const end = new EndNode(x, y);
        ENDS.push(end);
        nodeLine.push(end);
        break;
      default:
        break;
    }
  });
  MAP.push(nodeLine);
});
//A* path finding

ENDS.forEach((end) => {
  OPEN.length = 0;
  CLOSED.length = 0
  OPEN.push(START);

  while (true) {
    let current = OPEN.reduce(function (prev, curr) {
      return prev.TotalCost < curr.TotalCost ? prev : curr;
    });

    if (current == end  || OPEN.length == 0) {
      break;
    }

    OPEN.splice(OPEN.indexOf(current), 1);
    CLOSED.push(current);

    for (let x = current.x - 1; x < current.x + 1; x++) {
      for (let y = current.y - 1; y < current.y + 1; y++) {
        if (MAP[y][x] === undefined) continue;
        const neighbour = MAP[y][x];
        if (
          !neighbour ||
          neighbour instanceof Wall ||
          CLOSED.includes(neighbour)
        ) {
          continue;
        }
        if (
          neighbour.TotalCost < current.TotalCost ||
          !OPEN.includes(neighbour)
        ) {
          neighbour.computeTotalCost(START, end);
          neighbour.parent = current;
          if (!OPEN.includes(neighbour)) {
            OPEN.push(neighbour);
          }
        }
      }
    }
  }
});
ENDS.forEach((end) => {
  let path = [];
  if (end.parent) {
    let current = end;
    while (true) {
      path.push(current.x + "x" + current.y);
      current = current.parent;
      if(!current) break
    }
    console.log(path)
  }else{
    console.log("NE")
  }
});
