import 'reflect-metadata';
import { RequestHandler } from 'express';
import { PropertyDescriptorRequestHandler } from './types-temp';
import { MetadataKeys } from './metadata-key.config';

export function Use(middleware: RequestHandler) {

  return function (target: Object, targetPropertyKey: string, propertyDescriptor: PropertyDescriptorRequestHandler) {

    const middlewares: Function[] = Reflect.getMetadata(MetadataKeys.middleware, target, targetPropertyKey) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, targetPropertyKey);
  };
}
