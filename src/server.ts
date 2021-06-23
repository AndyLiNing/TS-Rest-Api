import { createServer } from 'http';
import { createServer as httpsCreateServer } from 'https';

import { app } from './app';
import { credentials } from './configs/web-server-configs/credentials';

type serverType = 'http' | 'https';

export class Server {
  static httpPort: number = +process.env.HTTP_PORT!;
  static httpsPort: number = +process.env.HTTPS_PORT!;

  static creatServer(type: serverType) {
    switch (type) {
      case 'http':
        createServer(app).listen(Server.httpPort, () => {
          console.log(`Http server is on: http://localhost:${this.httpPort}`);
        });
        break;
      case 'https':
        httpsCreateServer(credentials, app).listen(this.httpsPort, () => {
          console.log(`Https server is on: https://localhost:${this.httpsPort}`);
        });
        break;
    }
  }
}
