import { Request, Response } from 'express';

import { controller, Get } from '../annotations';

@controller('/auth')
class AuthControllerStub {
  @Get('/login')
  login(req: Request, res: Response): void {
    res.send('hi there!!!');
  }
}
