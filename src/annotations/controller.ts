import 'reflect-metadata';
import { HTTP_METHODS } from './types-temp';

import { AppRouter } from '../app-router';
import {MetadataKeys} from "./metadata-key.config";

export function controller(routePrefix: string): (target: Function) => void {
  return (target: Function): void => {
    for (let targetMethodProperty in target.prototype) {

      const routeHandler = target.prototype[targetMethodProperty];

      const route: string = Reflect.getMetadata(
        MetadataKeys.route,
        target.prototype,
        targetMethodProperty
      );
      const method: HTTP_METHODS = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        targetMethodProperty
      );

      if (route && method) {
        AppRouter.router[method](routePrefix + route, routeHandler);
      }
    }
  };
}
