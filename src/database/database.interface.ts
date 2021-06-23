import { Observable } from 'rxjs';
import { Mongoose } from 'mongoose';

export interface DatabaseInterface {
  connect: () => Observable<Mongoose>;
}
