export function getUniqueNumbers(arr1: number[], arr2: number[]) {
  const newArray: number[] = arr1.concat(arr2);
  const unique = [...new Set(newArray)]
  return unique
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
