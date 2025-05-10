function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const numFirst = getFirstElement<number>([1, 2, 3]);
  const strFirst = getFirstElement<string>(["a", "b", "c"]);
  const boolFirst = getFirstElement<boolean>([true, false, true]);
  
  console.log(numFirst);
  console.log(strFirst);
  console.log(boolFirst);