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
  const result = [];

  arrSplitArgs.forEach((el) => result.push(`${el[0].replace(/^-+/g, '')} is ${el[1]}`));
  
  console.log(result.join(', '));
};

parseArgs();
