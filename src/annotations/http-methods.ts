import 'reflect-metadata';

import { HTTP_METHODS, PropertyDescriptorRequestHandler } from './types-temp';
import { MetadataKeys } from './metadata-key.config';

export const Get = routeBinderFactory('get');
export const Post = routeBinderFactory('post');
export const Put = routeBinderFactory('put');
export const Delete = routeBinderFactory('delete');
export const Options = routeBinderFactory('options');
export const Head = routeBinderFactory('head');

function routeBinderFactory(method: HTTP_METHODS) {
  return (route: string) => (target: Object, targetPropertyKey: string, propertyDescriptor: PropertyDescriptorRequestHandler) => {
    Reflect.defineMetadata(MetadataKeys.route, route, target, targetPropertyKey);
    Reflect.defineMetadata(MetadataKeys.method, method, target, targetPropertyKey);
  };
}
