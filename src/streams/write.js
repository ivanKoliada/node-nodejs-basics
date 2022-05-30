import * as fs from 'fs';
import * as path from 'path';
import { stdin } from 'process';

export const write = async () => {
  const pathToFile = path.join('files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(pathToFile, 'utf8');

  stdin.pipe(writableStream);
};

write();
