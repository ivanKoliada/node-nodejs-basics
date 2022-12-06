import * as url from 'url';
import { createWriteStream } from 'fs';
import * as path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
const writableStream = createWriteStream(pathToFile, 'utf8');
  
export const write = async () => {
  process.stdin.pipe(writableStream);
};

write();
