export const generateSequentialNumbersArray =(length)=> {
    if (typeof length !== 'number' || length <= 0) {
      return [];
    }
  
    let sequentialArray = [];
    for (let i = 1; i <= length; i++) {
      sequentialArray.push(i);
    }
    return sequentialArray;
  }
 