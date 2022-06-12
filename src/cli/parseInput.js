export function parseInput(inputString) {
  if (!inputString.includes('"')) {
    return inputString.split(' ');
  }
  const firstSpaceIndex = inputString.indexOf(' ');
  const command = inputString.slice(0, firstSpaceIndex);
  const params = inputString.slice(firstSpaceIndex + 1);
  const paramsList = params.split('"');
  paramsList.unshift(command)
  return paramsList.filter(p => p && p !== ' ').map(p => p.trim());
}
