import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';

const gUnzip = createUnzip();
const pathToZipFile = join('files', 'archive.gz');
const pathToFile = join('files', 'fileToCompress.txt');

const readableStream = createReadStream(pathToZipFile);
const writableStream = createWriteStream(pathToFile);

export const decompress = async () => {
  pipeline(readableStream, gUnzip, writableStream, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  })
};

decompress();


