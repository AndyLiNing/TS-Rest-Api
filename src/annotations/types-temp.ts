import { RequestHandler } from 'express';

export type HTTP_METHODS = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

export interface PropertyDescriptorRequestHandler extends PropertyDescriptor {
  value?: RequestHandler;
}
