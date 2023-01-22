// Алгоритм бинарного поиска элемента item: number
// из упорядоченного списка list: number[]:

export function searchNumber(list: number[], item: number): number | null {
  let result: number | null = null;
  let startInd = 0;
  let endInd = list.length - 1;

  while (startInd <= endInd) {
    let index = Math.floor((startInd + endInd) / 2);
    if (list[index] === item) {
      result = list[index];
      break;
    }
    if (list[index] < item) {
      startInd = index + 1;
      continue;
    }
    if (list[index] > item) {
      endInd = index - 1;
      continue;
    }
  }

  return result;
}
