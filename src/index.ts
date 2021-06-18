import { createServer } from 'http';
import { createServer as httpsCreateServer } from 'https';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';

import { app } from './app';

const serverKeyPath = join(dirname(__dirname), 'ssl-credentials/server-key.pem');
const serverCertPath = join(dirname(__dirname), 'ssl-credentials/server-crt.pem');

const privateKey = readFileSync(serverKeyPath, 'utf-8');
const certificate = readFileSync(serverCertPath, 'utf-8');

const credentials = { key: privateKey, cert: certificate };

const port = 3000;
const httpsPort = 8443;

createServer(app).listen(port, () => {
  console.log(`Http Server is running on port ${port}`);
});

httpsCreateServer(credentials, app).listen(httpsPort, () => {
  console.log(`Https Server is running on port ${httpsPort}`);
});
