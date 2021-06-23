import 'reflect-metadata';
import { HTTP_METHODS } from './types-temp';

import { AppRouter } from '../app-router';
import { MetadataKeys } from './metadata-key.config';
import { RequestHandler } from 'express';

export function Controller(routePrefix?: string): (target: Function) => void {
  return (target: Function): void => {
    Object.keys(target.prototype).forEach((targetMethodProperty) => {
      const routeHandler = target.prototype[targetMethodProperty];

      // Get routes and its handles
      const route: string = Reflect.getMetadata(MetadataKeys.route, target.prototype, targetMethodProperty);
      const method: HTTP_METHODS = Reflect.getMetadata(MetadataKeys.method, target.prototype, targetMethodProperty);

      // Get the middlewares
      const middlewares: RequestHandler[] = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, targetMethodProperty) || [];

      // Get the templates

      if (route && method) {
        AppRouter.router[method](routePrefix + route, [...middlewares], routeHandler);
      }
    });
  };
}
