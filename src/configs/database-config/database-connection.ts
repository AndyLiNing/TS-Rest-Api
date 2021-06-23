import { Observable } from 'rxjs';

export class DatabaseConnection {
  static databaseUrl = process.env.DATABASE_URL!;
  static connectToMongoDB: () => Observable<any>;
}
