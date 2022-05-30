import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const gzip = createGzip();
const pathToFile = join('files', 'fileToCompress.txt');
const pathToZipFile = join('files', 'archive.gz');

const readableStream = createReadStream(pathToFile);
const writableStream = createWriteStream(pathToZipFile);

export const compress = async () => {
  pipeline(readableStream, gzip, writableStream, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  }) 
};

compress();