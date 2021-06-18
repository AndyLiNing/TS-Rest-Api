import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import './controllers/auth.controller.stub';
import { AppRouter } from './app-router';

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(AppRouter.router);
