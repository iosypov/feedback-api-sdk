/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface Data {
  code?: string;
  expected?: string;
  received?: string;
  path?: string[];
  message?: string;
}

export const dataSchema: Schema<Data> = object({
  code: ['code', optional(string())],
  expected: ['expected', optional(string())],
  received: ['received', optional(string())],
  path: ['path', optional(array(string()))],
  message: ['message', optional(string())],
});