import * as url from 'url';
import { readdir } from 'fs/promises';
import { join, basename} from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFolder = join(__dirname, 'files');

export const list = async () => {
  const array = [];
  const files = await readdir(pathToFolder, { withFileTypes: true })
    .catch(() => {
    throw new Error('FS operation failed')
  });

  files.forEach((file) => {
    const filePath = join(__dirname, 'files', file.name);
    const name = basename(filePath);
    array.push(name);
  })

  console.log(array);
};

list();