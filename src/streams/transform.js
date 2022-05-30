import { Transform, pipeline } from 'stream';
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
  pipeline(stdin, reverseStream, stdout, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
  // stdin.pipe(reverseStream).pipe(stdout);
};

transform();
