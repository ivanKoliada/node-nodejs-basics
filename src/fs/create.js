import * as url from 'url'; 
import { open } from 'fs/promises';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fresh.txt');


export const create = async () => {
  open(pathToFile, 'wx').catch(() => {
    throw new Error('FS operation failed')
  });  
};

create();