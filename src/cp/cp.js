import * as url from 'url';
import { fork } from 'child_process';
import { join } from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'files', 'script.js');

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const child = fork(pathToFile, [...args], { silent: true }); 

  process.stdin.on('data', data => {
    console.log(`\x1b[34mSend to child process from master: ${data}\x1b[0m`);
  });
    
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.stdout.on('data', data => {
    console.log(`\x1b[31mReceived from child process: ${data}\x1b[0m`);
  });

  child.on('exit', _ => console.log('CHILD PROCESS TERMINATED'));

}

spawnChildProcess(args);