import * as url from 'url'; 
import { readFile } from 'fs/promises';
import { join} from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  await readFile(pathToFile, 'utf8')
    .then((data) => console.log('\x1b[34m', data, '\x1b[0m'))
    .catch(() => {
    throw new Error('FS operation failed')
  });
};

read();