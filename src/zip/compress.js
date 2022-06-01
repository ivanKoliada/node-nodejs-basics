import * as url from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

const gzip = createGzip();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'fileToCompress.txt');
const pathToZipFile = join(__dirname, 'files', 'archive.gz');

const readableStream = createReadStream(pathToFile);
const writableStream = createWriteStream(pathToZipFile);

export const compress = async () => {
  readableStream.pipe(gzip).pipe(writableStream);
};

compress();