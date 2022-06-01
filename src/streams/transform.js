import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const reverseStream = new Transform({
  transform (chunk, _, callback) {
    const reversedData = chunk.toString()
      .trim()
      .split('')
      .reverse()
      .join('');
    this.push(`${reversedData}\n`);
    callback();
  }
});

export const transform = async () => {
  stdin.pipe(reverseStream).pipe(stdout);
};

transform();
