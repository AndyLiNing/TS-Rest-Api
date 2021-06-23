import { Request, Response } from 'express';

import { Controller, Get, Post } from '../annotations';

@Controller('/auth')
class AuthControllerStub {
  @Get('/login')
  login(req: Request, res: Response): void {
    res.send('hi there!!!');
  }

  @Post('/login')
  processLogin(req: Request, res: Response): void {
    res.send(req.body);
  }
}
