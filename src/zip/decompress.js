import * as url from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createUnzip } from 'zlib';

const gUnzip = createUnzip();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToZipFile = join(__dirname, 'files', 'archive.gz');
const pathToFile = join(__dirname, 'files', 'fileToCompress.txt');

const readableStream = createReadStream(pathToZipFile);
const writableStream = createWriteStream(pathToFile);

export const decompress = async () => {
  readableStream.pipe(gUnzip).pipe(writableStream);
};

decompress();
