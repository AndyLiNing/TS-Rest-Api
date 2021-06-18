import 'reflect-metadata';
import { RequestHandler } from 'express';
import { PropertyDescriptorRequestHandler } from './types-temp';
import { MetadataKeys } from './metadata-key.config';
import {isNotNullish} from "../utils/isDefined";

export function Use(middleware: RequestHandler) {
  return function (target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptorRequestHandler) {
    let newMiddlewares: Function[];
    const middlewares: Function[] = Reflect.getMetadata(MetadataKeys.middleware, target, propertyKey);
    if(isNotNullish<Function[]>(middlewares)){
       newMiddlewares = [...middlewares, middleware];
    }
    newMiddlewares = [middleware];
    Reflect.defineMetadata(MetadataKeys.middleware, newMiddlewares, target, propertyKey);
  };
}
