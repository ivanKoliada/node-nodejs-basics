import * as url from 'url'; 
import { join } from 'path';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const cores = cpus().length;
const num = 10;
const result = [];

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = join(__dirname, 'worker.js');

export const performCalculations = async () => { 
  for (let i = 0; i < cores; i++) {
    const value = new Promise(resolve => {
      const worker = new Worker(pathToFile, { workerData: num + i });
      worker.on('message', msg => resolve({status: 'resolved', data: msg}));
      worker.on('error', () => resolve({status: 'error', data: null}));
    });

    result.push(await value)
  }

  console.log(result);
 
}

performCalculations();
