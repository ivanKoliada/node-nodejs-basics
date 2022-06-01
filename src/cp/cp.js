import * as url from 'url';
import { fork } from 'child_process';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'script.js');

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const child = fork(pathToFile, [...args]);
  child.on('message', ()=> {})
};

spawnChildProcess(args);