import { config } from 'dotenv';
import { join } from 'path';

(() => {
  const { error, parsed } = config({ path: join('src/.env') });
  if (error) {
    console.log('Please add the env variables. ');
    process.exit(1);
  }
})();
