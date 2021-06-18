import { Router } from 'express';

export class AppRouter {
  private static _intance: Router;

  static get router(): Router {
    if (!this._intance) {
      this._intance = Router();
    }
    return this._intance;
  }
}
