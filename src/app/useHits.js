import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

export const useHits = () => {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  hits++;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));
  return hits;
};

