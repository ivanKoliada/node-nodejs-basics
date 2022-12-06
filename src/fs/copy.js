import * as url from 'url';  
import { cp } from 'fs/promises';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFiles = join(__dirname, 'files');
const pathToFilesCopy = join(__dirname, 'files_copy');

export const copy = async () => {
  cp(pathToFiles, pathToFilesCopy,
    { errorOnExist: true, force: false, recursive: true })
    .catch(() => {
    throw new Error('FS operation failed')
  });
};

copy();