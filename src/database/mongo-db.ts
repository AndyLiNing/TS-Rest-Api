import { Database } from './database';
import { connect, Mongoose } from 'mongoose';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';
import { DatabaseInterface } from './database.interface';

export class MongoDB extends Database implements DatabaseInterface {
    connect(): Observable<Mongoose> {
    return fromPromise(connect(Database.databaseUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }));
  }
}
export const Connect = new MongoDB;
