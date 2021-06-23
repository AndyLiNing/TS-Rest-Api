import './utils/loadEnvsVariables';

import { Server } from './server';
import { MongoDBConnection } from './configs/database-config/mongoDB-connection';

(() => {
  MongoDBConnection.connectToMongoDB().subscribe(
    (mongoose) => {
      Server.creatServer('http');
    },
    (e) => console.log('db server error')
  );
})();
