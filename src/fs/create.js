import * as url from 'url'; 
import { writeFile } from 'fs/promises';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';


export const create = async () => {
  writeFile(pathToFile, content, { flag: 'wx'}).catch(() => {
    throw new Error('FS operation failed')
  });  
};

create();