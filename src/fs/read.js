import * as url from 'url'; 
import { readFile } from 'fs/promises';
import { join} from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  const data = await readFile(pathToFile, 'utf8')
    .catch(() => {
    throw new Error('FS operation failed')
  });
  console.log('\x1b[34m', data, '\x1b[0m');
};

read();