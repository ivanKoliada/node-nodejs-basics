import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const reverseStream = new Transform({
  transform (chunk, _, callback) {
    const reversedData = chunk.toString()
      .trim()
      .split('')
      .reverse()
      .join('');
    this.push(`\x1b[31m${reversedData}\n\x1b[0m`);
    callback();
  }
});

export const transform = async () => {
  stdin.pipe(reverseStream).pipe(stdout);
};

transform();
