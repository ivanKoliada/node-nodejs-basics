import * as fs from 'fs';
import * as path from 'path';
import { stdout } from 'process';

export const read = async () => { 
  const pathToFile = path.join('files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(pathToFile, 'utf8');

  readableStream.pipe(stdout);
} 

read();