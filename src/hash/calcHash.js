import * as url from 'url';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  fs.readFile(pathToFile, 'utf8', (_, data) => {
    const hash = crypto.createHash('sha256')
      .update(data)
      .digest('hex');

    console.log(hash); 
  });
};

calculateHash();



