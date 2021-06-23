import { DatabaseConnection } from './database-connection';
import { connect, Mongoose } from 'mongoose';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';

export class MongoDBConnection extends DatabaseConnection {
  static connectToMongoDB(): Observable<Mongoose> {
    return fromPromise(connect(DatabaseConnection.databaseUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }));
  }
}
