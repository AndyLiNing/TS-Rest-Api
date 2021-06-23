import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const serverKeyPath = join(dirname(__dirname), '../../ssl-credentials/server-key.pem');
const serverCertPath = join(dirname(__dirname), '../../ssl-credentials/server-crt.pem');

const privateKey = readFileSync(serverKeyPath, 'utf-8');
const certificate = readFileSync(serverCertPath, 'utf-8');

export const credentials = { key: privateKey, cert: certificate };
