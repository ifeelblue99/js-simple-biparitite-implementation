const adjacencyList = new Map()
adjacencyList["A"] = ["G", "E"]
adjacencyList["B"] = ["G", "E", "F"]
adjacencyList["C"] = ["H", "F"]
adjacencyList["D"] = ["G", "F", "H"]
adjacencyList["E"] = ["A", "B"]
adjacencyList["F"] = ["C", "D", "B"]
adjacencyList["G"] = ["A", "B", "D"]
adjacencyList["H"] = ["C", "D"]

function dfs(list, start="A", visited = new Set(), teamA = ["A"]) {
  if (visited.has(start)) {
    return
  }
  
  last = teamA[teamA.length-1]
  
  if(!list[last].includes(start)) {
      teamA.push(start)
  }
  
  visited.add(start)
  console.log("curr:",start)
  for (let node of list[start]) {
    dfs(list, node, visited, teamA)
  }
  return new Set(teamA)
}

console.log("team A:",dfs(adjacencyList))
