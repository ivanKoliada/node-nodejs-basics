import * as url from 'url';
import { unlink } from 'fs/promises';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  unlink(pathToFile).catch(() => {
    throw new Error('FS operation failed')
  });
};

remove();