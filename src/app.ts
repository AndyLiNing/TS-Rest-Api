import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { AppRouter } from './app-router';

import './controllers/auth.controller.stub';

export const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(AppRouter.router);

