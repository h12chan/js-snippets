// Use JavaScript to track api execution time with performance.now

import {
  performance
} from 'perf_hooks';
import fetch from 'node-fetch';

async function main() {
  const then = performance.now();
  await fetch('http://google.com')
  const after = performance.now();
  console.log(`${after - then}ms`);
}
main();


// https://www.youtube.com/shorts/J9zpHR2emc4
