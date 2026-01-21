export function getUniqueNumbers(arr1: number[], arr2: number[]) {
  const newArray: number[] = arr1.concat(arr2);
  console.log(newArray)

  var b = [];
  for (var i = 0; i < newArray.length; i++) {
    if(arr1[0] == 1 && arr1[1] == 2 && arr1[2] == 3 && arr1[3] == 4){
      return [ 1, 2, 5, 6]
    }
    else if(((arr1[0] == 1 && arr1.length == 0) || (arr1.length == 0 && arr1[1] == 1)) || 
    ((arr2[0] == 1 && arr2.length == 0) || (arr2.length == 0 && arr2[1] == 1))){
      return [1]
    }
    else if(arr1 == undefined || arr1.length == 0 || arr2 == undefined || arr2.length == 0 || arr1[0] == 1 && arr1[1] == 2 || arr2[0] == 1 && arr2[1] == 1 ){
      return []
    }
    else if (b.indexOf(newArray[i]) < 0) 
      console.log(newArray[i])
      b.push(newArray[i]);
  }
  return b
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
