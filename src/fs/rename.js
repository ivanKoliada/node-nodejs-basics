import * as url from 'url'; 
import { rename as renameFile } from 'fs/promises';
import { access } from 'fs';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToWrongFile = join(__dirname, 'files', 'wrongFilename.txt');
const pathToProperFile = join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
  access(pathToProperFile, (err) => {
    if (err) {
      renameFile(pathToWrongFile, pathToProperFile)
        .catch(() => {
        throw new Error('FS operation failed')
      });
    } else {
      throw new Error('FS operation failed');      
    }
  })   
};

rename();