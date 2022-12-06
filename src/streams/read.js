import * as url from 'url';
import { createReadStream } from 'fs';
import * as path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
const readableStream = createReadStream(pathToFile, 'utf8');

export const read = async () => {
  readableStream.pipe(process.stdout);
} 

read();