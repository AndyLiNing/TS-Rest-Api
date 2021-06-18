import {NextFunction, Request, Response} from 'express';

import { Controller, Get } from '../annotations';
import {Use} from "../annotations/use";

@Controller('/auth')
class AuthControllerStub {
  @Get('/login')
  @Use(logger)
  login(req: Request, res: Response): void {
    res.send('hi there!!!');
  }
}
function logger(req: Request, res: Response, next: NextFunction) {
  console.log('in logger middleware');
  next();
}
