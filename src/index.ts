import './utils/loadEnvsVariables';

import { Server } from './server';
import { Connect } from './database/mongo-db';

Connect.connect().subscribe(
  (mongoose) => {
    Server.creatServer('http');
  },
  (e) => console.log('db server error')
);
