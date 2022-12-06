import * as url from 'url';
import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const readableStream = createReadStream(pathToFile);

export const calculateHash = async () => {
  readableStream.on('data', (chunk) => {
    const hash = crypto.createHash('sha256')
      .update(chunk)
      .digest('hex');

    console.log(hash); 
  })
};

calculateHash();



