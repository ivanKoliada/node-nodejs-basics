function splitArr(arr, chunkSize) { 
  const result = []; 

  for (let i = 0; i < arr.length; i += chunkSize) { 
    const chunk = arr.slice(i, i + chunkSize); 
    result.push(chunk); 
  } 
  return result; 
}

const chunkSize = 2;

export const parseArgs = () => {
  const arrArgs  = process.argv.slice(2);
  const arrSplitArgs = splitArr(arrArgs, chunkSize);
  const arrValues = [];

  arrSplitArgs
    .forEach(el => arrValues.push(`${el[0].slice(2)} is ${el[1]}`));
  
  console.log(arrValues);
};

parseArgs();

